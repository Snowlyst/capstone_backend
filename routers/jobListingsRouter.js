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
      "/getonejob/:jobId",
      this.jwtCheck,
      this.controller.getOneJob.bind(this.controller)
    );
    router.get(
      "/categories/",
      this.controller.getAllCategory.bind(this.controller)
    );

    router.get("/linkedin", this.controller.getData.bind(this.controller));
    router.post("/linkedin", this.controller.getData.bind(this.controller));

    router.get(
      "/company/:companyId",
      this.controller.getOneCompanyListing.bind(this.controller)
    );
    router.get(
      "/categories/sorted",
      this.controller.getAllCategorySorted.bind(this.controller)
    );
    router.get(
      "/categories/bycategory/:jobCategoryId",
      this.controller.getOneCategory.bind(this.controller)
    ),
      router.get(
        "/companysearchbyuserid/:userId",
        this.controller.getListingByUserId.bind(this.controller)
      );
    router.get(
      "/allcategories/sorted",
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

    router.get(
      "/admin/checkunverifiedjob",
      this.jwtCheck,
      this.controller.checkUnverifiedJob.bind(this.controller)
    );

    router.put(
      "/admin/acceptunverifiedjob/",
      this.jwtCheck,
      this.controller.acceptUnverifiedJob.bind(this.controller)
    );

    router.put(
      "/admin/requestchangetojob",
      this.jwtCheck,
      this.controller.requestChangeToJob.bind(this.controller)
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
