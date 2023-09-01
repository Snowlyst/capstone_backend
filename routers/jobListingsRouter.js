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
    router.post("/linkedin", this.controller.getData.bind(this.controller));
    router.get(
      "/:companyId",
      this.controller.getOneCompanyListing.bind(this.controller)
    );

    router.get("/location", this.controller.getLocation.bind(this.controller));

    router.get(
      "/categories/sorted",
      this.controller.getAllCategorySorted.bind(this.controller)
    );

    router.post(
      "/search/",
      this.controller.getJobBySearch.bind(this.controller)
    );

    router.post(
      "/search/mount",
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
