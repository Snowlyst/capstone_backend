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
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}
module.exports = IndividualJobseekerDashboardController;
