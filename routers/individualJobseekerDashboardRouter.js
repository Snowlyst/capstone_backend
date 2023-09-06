const express = require("express");
const router = express.Router();

class IndividualJobseekerDashboardRouter {
  constructor(controller, jwtCheck) {
    this.controller = controller;
    this.jwtCheck = jwtCheck;
  }
  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));

    router.get(
      "/getoneapplication/:jobId",
      // this.jwtCheck,
      this.controller.getOneApplication.bind(this.controller)
    );

    return router;
  }
}
module.exports = IndividualJobseekerDashboardRouter;
