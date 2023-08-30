const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller, jwtCheck) {
    this.controller = controller;
    this.jwtCheck = jwtCheck; // middleware
  }
  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get(
      "/personalinfo",
      this.controller.getAllPersonalInformation.bind(this.controller)
    );

    router.get(
      "/personalinfo/:userId",
      this.controller.getOnePersonalInformation.bind(this.controller)
    );

    router.post(
      "/login",
      this.jwtCheck,
      this.controller.retrieveLogin.bind(this.controller)
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
module.exports = UsersRouter;
