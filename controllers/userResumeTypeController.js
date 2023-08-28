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

  async editOneResume(req, res) {
    try {
      const { resumeName, resumeDescription, resumeUrl } = req.body;
      const { resumeId } = req.params;
      await this.model.update(
        {
          resumeTitle: resumeName,
          resumeDescription: resumeDescription,
          resumeUrl: resumeUrl,
          updatedAt: new Date().toISOString(),
        },
        {
          where: {
            id: resumeId,
          },
        }
      );
      const output = await this.model.findAll({
        where: {
          id: resumeId,
        },
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }

  async deleteOneResume(req, res) {
    try {
      const { resumeId } = req.params;
      await this.model.destroy({
        where: {
          id: resumeId,
        },
      });
      res.status(200).json({ success: true, message: "Resume Obliterated" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }

  async addOneResume(req, res) {
    try {
      const { userId } = req.params;
      const { resumeName, resumeDescription, resumeUrl } = req.body;
      const output = this.model.create({
        userId: userId,
        resumeTitle: resumeName,
        resumeDescription: resumeDescription,
        resumeUrl: resumeUrl,
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
}
module.exports = UserResumeTypeController;
