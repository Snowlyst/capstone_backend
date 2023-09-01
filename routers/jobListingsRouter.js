const express = require("express");
const router = express.Router();

class JobListingsRouter {
  constructor(controller, jwtCheck) {
    this.controller = controller;
    this.jwtCheck = jwtCheck; // middleware
  }
  routes() {
    router.get("/", this.controller.getAllListing.bind(this.controller));
    router.get(
      "/categories/",
      this.controller.getAllCategory.bind(this.controller)
    );
    router.get("/linkedin", this.controller.getData.bind(this.controller));
    router.get(
      "/:companyId",
      this.jwtCheck,
      this.controller.getOneCompanyListing.bind(this.controller)
    );

    router.get(
      "/categories/sorted",
      this.jwtCheck,
      this.controller.getAllCategorySorted.bind(this.controller)
    );

    router.post(
      "/search/",
      this.jwtCheck,
      this.controller.getJobBySearch.bind(this.controller)
    );

    router.post(
      "/search/mount",
      this.jwtCheck,
      this.controller.getJobOnMount.bind(this.controller)
    );
    // to add in protected route w jwt, eg
    // router.post(
    //   "/",
    //   this.jwtCheck,
    //   this.controller.insertOne.bind(this.controller)
    // );

    return router;
  }
}
module.exports = JobListingsRouter;
