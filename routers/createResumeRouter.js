const express = require("express");
const router = express.Router();

class CreateResumeRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.post(
      "/experience/:userId",
      this.controller.addExperience.bind(this.controller)
    );
    router.delete(
      "/experience/:experienceId",
      this.controller.deleteExperience.bind(this.controller)
    );
    router.put(
      "/experience/:experienceId",
      this.controller.editExperience.bind(this.controller)
    );

    router.post(
      "/education/:userId",
      this.controller.addEducation.bind(this.controller)
    );
    router.delete(
      "/education/:educationId",
      this.controller.deleteEducation.bind(this.controller)
    );
    router.put(
      "/education/:educationId",
      this.controller.editEducation.bind(this.controller)
    );
    router.post(
      "/skill/:userId",
      this.controller.addSkill.bind(this.controller)
    );
    router.delete(
      "/skill/:skillId",
      this.controller.deleteSkill.bind(this.controller)
    );
    router.put(
      "/skill/:skillId",
      this.controller.editSkill.bind(this.controller)
    );
    router.post(
      "/language/:userId",
      this.controller.addLanguage.bind(this.controller)
    );
    router.delete(
      "/language/:languageId",
      this.controller.deleteLanguage.bind(this.controller)
    );
    router.put(
      "/language/:languageId",
      this.controller.editLanguage.bind(this.controller)
    );
    router.post(
      "/additionalinfo/:userId",
      this.controller.addInfo.bind(this.controller)
    );
    router.delete(
      "/additionalinfo/:additionalInfoId",
      this.controller.deleteInfo.bind(this.controller)
    );
    router.put(
      "/additionalinfo/:additionalInfoId",
      this.controller.editInfo.bind(this.controller)
    );
    router.post(
      "/aboutme/:userId",
      this.controller.addSelf.bind(this.controller)
    );
    router.delete(
      "/aboutme/:selfInfoId",
      this.controller.deleteSelf.bind(this.controller)
    );
    router.put(
      "/aboutme/:selfInfoId",
      this.controller.editSelf.bind(this.controller)
    );
     router.post(
       "/privacy/:userId",
       this.controller.addPrivacy.bind(this.controller)
     );
     router.delete(
       "/privacy/:privacyId",
       this.controller.deletePrivacy.bind(this.controller)
     );
     router.put(
       "/privacy/:privacyId",
       this.controller.editPrivacy.bind(this.controller)
     );
    return router;
  }
}

module.exports = CreateResumeRouter;
