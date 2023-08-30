const BaseController = require("./baseController");
// This just cover
//UsersController(user, user_role, user_personal_detail);
class UsersController extends BaseController {
  constructor(user, userRoleModel, userPersonalDetailModel) {
    super(user);
    this.userRoleModel = userRoleModel;
    this.userPersonalDetailModel = userPersonalDetailModel;
    console.log(userRoleModel);
  }

  async retrieveLogin(req, res) {
    const user = req.body;
    console.log(user);
    const { given_name, family_name, email, role } = req.body;

    try {
      const [checkedUser, created] = await this.model.findOrCreate({
        where: { email: email },
        defaults: {
          firstName: given_name || null,
          lastName: family_name || null,
          email: email,
          userName: email,
          userRoleId: role,
          approvedByAdmin: false,
        },
      });
      if (created) {
        console.log("User Created!");
      } else {
        console.log("User retrieved!");
      }
      return res.json({ checkedUser });
    } catch (err) {
      console.log(err.message);
      console.log("I'm in login catch-try-catch: error");
      return res.status(400).json({ error: true, msg: err.message });
    }
  }

  async getAllPersonalInformation(req, res) {
    try {
      const output = await this.model.findAll({
        include: [
          {
            model: this.userPersonalDetailModel,
          },
        ],
      });
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err.message });
    }
  }

  async getOnePersonalInformation(req, res) {
    const { userId } = req.params;
    try {
      const output = await this.model.findByPk(userId, {
        include: [
          {
            model: this.userPersonalDetailModel,
          },
        ],
      });
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
}
module.exports = UsersController;
