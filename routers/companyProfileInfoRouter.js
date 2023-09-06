const express = require("express");
const router = express.Router();

class CompanyProfileInfoRouter {
  constructor(controller, jwtCheck) {
    this.controller = controller;
    this.jwtCheck = jwtCheck;
  }
  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get(
      "/company/:companyId",
      this.controller.getOneCompany.bind(this.controller)
    );

    router.get("/location", this.controller.getLocation.bind(this.controller));

    router.post(
      "/newjobpost",
      this.jwtCheck,
      this.controller.postNewJob.bind(this.controller)
    );

    router.get("/jobs/:jobId", this.controller.getOneJob.bind(this.controller));

    router.put(
      "/admin/acceptunverifiedcompany",
      this.jwtCheck,
      this.controller.acceptUnverifiedCompany.bind(this.controller)
    );

    router.delete(
      "/admin/deleteunverifiedcompany/:entityId",
      this.jwtCheck,
      this.controller.deleteUnverifiedCompany.bind(this.controller)
    );

    router.put(
      "/admin/unverifycompany",
      this.jwtCheck,
      this.controller.unverifyACompany.bind(this.controller)
    );

    return router;
  }
}
module.exports = CompanyProfileInfoRouter;
