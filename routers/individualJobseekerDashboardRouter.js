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
      this.jwtCheck,
      this.controller.getOneApplication.bind(this.controller)
    );

    router.put(
      "/scheduleinterview",
      this.jwtCheck,
      this.controller.scheduleInterview.bind(this.controller)
    );

    router.put(
      "/rejectapplicant",
      this.jwtCheck,
      this.controller.rejectApplicant.bind(this.controller)
    );

    router.put(
      "/hireapplicant",
      this.jwtCheck,
      this.controller.hireApplicant.bind(this.controller)
    );

    router.get(
      "/getallbyuser/:userId",
      this.jwtCheck,
      this.controller.getAllByUser.bind(this.controller)
    );

    router.put(
      "/withdrawapplication",
      this.jwtCheck,
      this.controller.withdrawApplication.bind(this.controller)
    );

    router.post(
      "/submitapplication",
      this.jwtCheck,
      this.controller.submitApplication.bind(this.controller)
    );

    return router;
  }
}
module.exports = IndividualJobseekerDashboardRouter;
