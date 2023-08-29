const BaseController = require("./baseController");
class JobListingsController extends BaseController {
  constructor(model, jobCategoryModel) {
    super(model);
    this.jobCategoryModel = jobCategoryModel;
  }
  async getAllListing(req, res) {
    try {
      const output = await this.model.findAll({});
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
  async getAllCategory(req, res) {
    try {
      const output = await this.jobCategoryModel.findAll({});
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err.message });
    }
  }

  async getOneCompanyListing(req, res) {
    try {
      const { companyId } = req.params;
      const output = await this.model.findAll({
        where: { companyId: companyId },
      });
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: true, msg: error.message });
    }
  }
}
module.exports = JobListingsController;
