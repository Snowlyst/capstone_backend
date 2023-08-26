const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

const corsOptions = {
  origin: process.env.CORS_OPTIONS,
};

const db = require("./db/models/index");
const { user, user_role, user_personal_detail } = db;

const UsersController = require("./controllers/usersController.js");
const usersController = new UsersController(
  user,
  user_role,
  user_personal_detail
);
const UsersRouter = require("./routers/usersRouter");
const usersRouter = new UsersRouter(usersController);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter.routes());

app.get("/proxy/linkedin", async (req, res) => {
  const targetURL = "https://www.linkedin.com/jobs/view/3682714831/";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // // console.log(html);

  // //wait for content to load
  // const showMoreButton = await page.waitForSelector(
  //   '::-p-aria([name="Show more, visually expands previously read content above"][role="button"])'
  // );
  // // click the show more button
  // await page.click(showMoreButton);

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
