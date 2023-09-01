const express = require("express");
const router = express.Router();

class UserResumeTypeRouter {
  constructor(controller, jwtCheck) {
    this.controller = controller;
    this.jwtCheck = jwtCheck;
  }
  routes() {
    router.get(
      "/",
      this.jwtCheck,
      this.controller.getAll.bind(this.controller)
    );
    router.get(
      "/:userId",
      this.jwtCheck,
      this.controller.getOnePersonResume.bind(this.controller)
    );
    router.put(
      "/:resumeId",
      this.jwtCheck,
      this.controller.editOneResume.bind(this.controller)
    );
    router.delete(
      "/:resumeId",
      this.controller.deleteOneResume.bind(this.controller)
    );
    router.post(
      "/:userId",
      this.jwtCheck,
      this.controller.addOneResume.bind(this.controller)
    );

    return router;
  }
}
module.exports = UserResumeTypeRouter;
