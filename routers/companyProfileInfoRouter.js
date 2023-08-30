const express = require("express");
const router = express.Router();

class CompanyProfileInfoRouter {
  constructor(controller, jwtCheck) {
    this.controller = controller;
    this.jwtCheck = jwtCheck;
  }
  routes() {
    router.get(
      "/:companyId",
      this.jwtCheck,
      this.controller.getOneCompany.bind(this.controller)
    );

    return router;
  }
}
module.exports = CompanyProfileInfoRouter;
