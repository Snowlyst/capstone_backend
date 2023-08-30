const BaseController = require("./baseController");
class JobListingsController extends BaseController {
  constructor(model, jobCategoryModel, companyProfileInfoModel ) {
    super(model);
    this.jobCategoryModel = jobCategoryModel;
    this.companyProfileInfoModel=companyProfileInfoModel
    
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
  async getOneCategory(req, res) {
    try {
      const { jobCategoryId} = req.params;
      const output = await this.model.findAll({
        where: {
          jobCategoryId: jobCategoryId,
          
        },
        include: [{
          model:this.companyProfileInfoModel,
          
        }]
        
      });
      res.status(200).json({ success: true, output });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
}
module.exports = JobListingsController;
