const BaseController = require("./baseController");

class IndividualJobseekerDashboardController extends BaseController {
  constructor(
    model,
    applicationStageModel,
    userModel,
    resumeModel,
    userPersonalDetail,
    jobListingModel
  ) {
    super(model);
    this.applicationStageModel = applicationStageModel;
    this.userModel = userModel;
    this.resumeModel = resumeModel;
    this.userPersonalDetail = userPersonalDetail;
    this.jobListingModel = jobListingModel;
  }
  async getOneApplication(req, res) {
    try {
      const { jobId } = req.params;
      const output = await this.model.findAll({
        where: {
          jobListingId: jobId,
          applicationStageId: [1, 2],
        },
        include: [
          {
            model: this.userModel,
            include: [
              {
                model: this.userPersonalDetail,
              },
            ],
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
          applicationStageId: 2,
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
          applicationStageId: 4,
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
          applicationStageId: 3,
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

  async getAllByUser(req, res) {
    try {
      const { userId } = req.params;
      const output = await this.model.findAll({
        where: {
          userId: userId,
          applicationStageId: [1, 2, 3, 4],
        },
        include: [
          {
            model: this.userModel,
          },
          {
            model: this.jobListingModel,
          },
          {
            model: this.applicationStageModel,
          },
        ],
      });
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }

  async withdrawApplication(req, res) {
    try {
      const { idToDelete } = req.body;
      const output = await this.model.update(
        {
          applicationStageId: 5,
        },
        {
          where: {
            id: idToDelete,
          },
        }
      );
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
    }
  }

  async submitApplication(req, res) {
    try {
      const { jobId, resumeId, userId } = req.body;
      const output = await this.model.create({
        jobListingId: jobId,
        userId: userId,
        resumeId: resumeId,
        applicationStageId: 1,
        interviewDate: null,
      });
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}
module.exports = IndividualJobseekerDashboardController;
