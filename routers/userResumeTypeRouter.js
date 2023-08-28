const express = require("express");
const router = express.Router();

class UserResumeTypeRouter {
  constructor(controller, jwtCheck) {
    this.controller = controller;
    this.jwtCheck = jwtCheck;
  }
  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get(
      "/:userId",
      this.controller.getOnePersonResume.bind(this.controller)
    );

    return router;
  }
}
module.exports = UserResumeTypeRouter;
