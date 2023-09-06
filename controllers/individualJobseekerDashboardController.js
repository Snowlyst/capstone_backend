const BaseController = require("./baseController");

class IndividualJobseekerDashboardController extends BaseController {
  constructor(model, applicationStageModel, userModel, resumeModel) {
    super(model);
    this.applicationStageModel = applicationStageModel;
    this.userModel = userModel;
    this.resumeModel = resumeModel;
  }
  async getOneApplication(req, res) {
    try {
      const { jobId } = req.params;
      const output = await this.model.findAll({
        where: {
          jobListingId: jobId,
          status: [1, 2],
        },
        include: [
          {
            model: this.userModel,
          },
          {
            model: this.applicationStageModel,
          },
        ],
      });
      console.log(output);
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }

  async scheduleInterview(req, res) {
    try {
      const { idToEdit, startTime } = req.body;
      const output = await this.model.update(
        {
          interviewDate: startTime,
          status: 2,
        },
        {
          where: {
            id: idToEdit,
          },
        }
      );
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }

  async hireApplicant(req, res) {
    try {
      const { idToEdit } = req.body;
      const output = await this.model.update(
        {
          status: 3,
        },
        {
          where: {
            id: idToEdit,
          },
        }
      );
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
  async rejectApplicant(req, res) {
    try {
      const { idToEdit } = req.body;
      const output = await this.model.update(
        {
          status: 4,
        },
        {
          where: {
            id: idToEdit,
          },
        }
      );
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}
module.exports = IndividualJobseekerDashboardController;
