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
      "/resume/:userId",
      this.jwtCheck,
      this.controller.getOnePersonResume.bind(this.controller)
    );
    router.put(
      "/resume/:resumeId",
      this.jwtCheck,
      this.controller.editOneResume.bind(this.controller)
    );
    router.delete(
      "/resume/:resumeId",
      this.controller.deleteOneResume.bind(this.controller)
    );
    router.post(
      "/resume/:userId",
      this.jwtCheck,
      this.controller.addOneResume.bind(this.controller)
    );
    router.get(
      "/getspecific/:resumeId",
      this.jwtCheck,
      this.controller.getOneResume.bind(this.controller)
    );

    return router;
  }
}
module.exports = UserResumeTypeRouter;
