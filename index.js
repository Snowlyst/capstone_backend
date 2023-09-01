const express = require("express");
const cors = require("cors");
//onst axios = require("axios");

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
  location,
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
  company_profile_info,
  location
);

const joblistingsController = new JobListingsController(
  job_listing,
  job_category,
  company_profile_info,
  location
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

app.listen(PORT, () => {
  console.log(`Express App listening on port ${PORT}`);
});
