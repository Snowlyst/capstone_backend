const express = require("express");
const cors = require("cors");
//onst axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// import middlewares
const jwtCheck = require("./middlewares/jwtCheck");

const corsOptions = {
  origin: process.env.CORS_OPTIONS,
};
// importing info from db area
const db = require("./db/models/index");
const {
  user,
  user_role,
  user_personal_detail,
  user_resume_type,
  job_listing,
  job_category,
  company_profile_info,
} = db;
// import controller file area
const UsersController = require("./controllers/usersController.js");
const UserResumeTypeController = require("./controllers/userResumeTypeController.js");
const JobListingsController = require("./controllers/jobListingsController.js");
const CompanyProfileInfoController = require("./controllers/companyProfileInfoController");

// put db stuff in controller section
const usersController = new UsersController(
  user,
  user_role,
  user_personal_detail
);
const userResumeTypeController = new UserResumeTypeController(user_resume_type);
const companyProfileInfoController = new CompanyProfileInfoController(
  company_profile_info
);

const joblistingsController = new JobListingsController(
  job_listing,
  job_category
);
// import router section
const UsersRouter = require("./routers/usersRouter");
const UserResumeTypeRouter = require("./routers/userResumeTypeRouter");
const JobListingsRouter = require("./routers/jobListingsRouter");
const CompanyProfileInfoRouter = require("./routers/companyProfileInfoRouter");

// assign controller to router area
const usersRouter = new UsersRouter(usersController, jwtCheck);
const userResumeTypeRouter = new UserResumeTypeRouter(
  userResumeTypeController,
  jwtCheck
);
const joblistingsRouter = new JobListingsRouter(
  joblistingsController,
  jwtCheck
);
const companyProfileInfoRouter = new CompanyProfileInfoRouter(
  companyProfileInfoController,
  jwtCheck
);

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// assign routes
app.use("/users", usersRouter.routes());
app.use("/resumes", userResumeTypeRouter.routes());
app.use("/company", companyProfileInfoRouter.routes());
app.use("/listings", joblistingsRouter.routes());

// this is for linked in scraping to test
app.get("/proxy/linkedin", async (req, res) => {
  const targetURL = "https://www.linkedin.com/jobs/view/3682714831/";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // // console.log(html);

  // //wait for content to load

  try {
    await page.goto(targetURL);
    const moreButtonSelector =
      'aria/Show more, visually expands previously read content above[role="button"]';
    await page.click(moreButtonSelector);
    page.screenshot({ path: "image.png" });
    const data = await page.content();
    const $ = cheerio.load(data);
    const title = $("h1").text();
    // const descriptionDiv = $("details mx-details-container-padding");
    // descriptionDiv.each((i, div) => {
    //   console.log($(div).text());
    // });
    const descriptionSelector =
      "div > .show-more-less-html__markup relative overflow-hidden";
    const elementHandle = await page.waitForSelector(descriptionSelector);

    const description = await page.$eval(elementHandle, (el) =>
      el.textContent.trim()
    );
    console.log("Description is: ", description);
    const jobData = {
      title: title,
      description: description,
    };
    console.log(jobData);

    // const textSelector = await page.waitForSelector(
    //   "description__text description__text--rich"
    // );
    // const fullDescription = await textSelector?.evaluate(
    //   (el) => el.textContent
    // );
    // console.log(fullDescription);

    //    await bodyHandle.dispose();
    await browser.close();
    //   const title = await page.waitForSelector(
    //     "h1 > top-card-layout__title font-sans text-lg papabear:text-xl font-bold leading-open text-color-text mb-0 topcard__title"
    //   );
    //   const jobDetails = await page.waitForSelector(
    //     "div > .description__text description__text--rich"
    //   );
    // const response = await axios.get(targetURL);
    // const $ = cheerio.load(response.data);

    res.send("works!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Express App listening on port ${PORT}`);
});
