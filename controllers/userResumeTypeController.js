const BaseController = require("./baseController");

class UserResumeTypeController extends BaseController {
  constructor(model) {
    super(model);
  }

  async getOnePersonResume(req, res) {
    try {
      const { userId } = req.params;
      const output = await this.model.findAll({
        where: {
          userId: userId,
        },
      });
      res.status(200).json({ success: true, output });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
}
module.exports = UserResumeTypeController;
