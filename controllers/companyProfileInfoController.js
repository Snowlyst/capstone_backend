const BaseController = require("./baseController");

class CompanyProfileInfoController extends BaseController {
  constructor(model) {
    super(model);
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
      res.status(400).json({ success: false, error: error });
    }
  }
}
module.exports = CompanyProfileInfoController;
