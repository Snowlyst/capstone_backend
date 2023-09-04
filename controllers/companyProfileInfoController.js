const BaseController = require("./baseController");

class CompanyProfileInfoController extends BaseController {
  constructor(model, locationModel, jobListingModel, userModel) {
    super(model);
    this.locationModel = locationModel;
    this.jobListingModel = jobListingModel;
    this.userModel = userModel;
  }
  async getOneCompany(req, res) {
    try {
      const { companyId } = req.params;
      const output = await this.model.findAll({
        where: {
          id: companyId,
        },
      });
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: true, msg: error.message });
    }
  }

  async getLocation(req, res) {
    try {
      const output = await this.locationModel.findAll();
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: true, msg: error.message });
    }
  }

  async postNewJob(req, res) {
    const {
      jobCategoryId,
      companyId,
      employmentType,
      title,
      description,
      locationId,
      minSalary,
      maxSalary,
    } = req.body;
    console.log(req.body);

    try {
      const output = await this.jobListingModel.create({
        jobCategoryId: jobCategoryId,
        companyId: companyId,
        employmentType: employmentType,
        title: title,
        description: description,
        locationId: locationId,
        minSalary: minSalary,
        maxSalary: maxSalary || null,
        approvalByAdmin: false,
        commentOnNotApproved: null,
      });
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: true, msg: error.message });
    }
  }

  async getOneJob(req, res) {
    const { jobId } = req.params;
    try {
      const output = await this.jobListingModel.findAll({
        where: {
          id: jobId,
        },
        include: [
          {
            model: this.model,
          },
          {
            model: this.locationModel,
          },
        ],
      });
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: true, msg: error.message });
    }
  }

  async acceptUnverifiedCompany(req, res) {
    try {
      const { entityId } = req.body;
      const output = this.model.update(
        {
          approvalByAdmin: true,
        },
        {
          where: {
            id: entityId,
          },
        }
      );
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: true, msg: error.message });
    }
  }

  async deleteUnverifiedCompany(req, res) {
    try {
      const { entityId } = req.params;
      const output = await this.model.destroy({
        where: {
          id: entityId,
        },
      });
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: true, msg: error.message });
    }
  }
}
module.exports = CompanyProfileInfoController;
