const BaseController = require("./baseController");
// This just cover
//UsersController(user, user_role, user_personal_detail);
class UsersController extends BaseController {
  constructor(
    user,
    userRoleModel,
    userPersonalDetailModel,
    companyModel,
    locationModel
  ) {
    super(user);
    this.userRoleModel = userRoleModel;
    this.userPersonalDetailModel = userPersonalDetailModel;
    this.companyModel = companyModel;
    this.locationModel = locationModel;
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

      // if user is employer, to return company info as well
      if (role === 3) {
        try {
          const company_profile_info = await this.companyModel.findAll({
            where: { userId: checkedUser.id },
          });
          if (company_profile_info.length > 0) {
            const company_info = company_profile_info[0].dataValues;
            console.log("This is companyInfo: ", company_info);
            checkedUser.dataValues.companyInfo = company_info;
            console.log("Company found, info added!");
          }

          console.log("User w co. info: ", checkedUser);
        } catch (err) {
          console.log("Error, company not found.", err.message);
        }
      }

      // other statements for other info will go here if needed to be loaded into currUser at login
      // else {

      // }

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
      console.log(output);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err.message });
    }
  }

  async checkUnverifiedUserAndCompany(req, res) {
    try {
      const output1 = await this.model.findAll({
        where: {
          approvedByAdmin: false,
        },
        include: [
          {
            model: this.userPersonalDetailModel,
          },
        ],
      });
      const output2 = await this.companyModel.findAll({
        where: {
          approvalByAdmin: false,
        },
      });
      res.status(200).json([output1, output2]);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err.message });
    }
  }

  async approveUnverifiedUser(req, res) {
    try {
      const { entityId } = req.body;
      const output = await this.model.update(
        {
          approvedByAdmin: true,
        },
        {
          where: {
            id: entityId,
          },
        }
      );
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err.message });
    }
  }

  async deleteUnverifiedUser(req, res) {
    try {
      const { entityId } = req.params;

      const output = await this.model.destroy({
        where: {
          id: entityId,
        },
      });
      res.status(200).json(output);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
  async retrieveProfile(req, res) {
    try {
      const { userId } = req.params;
      console.log(req.body);

      // const {output, created} = await this.userPersonalDetailModel.findOrCreate({
      //   where: {
      //     userId: fieldValues.id,
      //     defaults: {
      //       firstName: given_name || null,
      //       lastName: family_name || null,
      //       email: email,
      //       userName: email,
      //       userRoleId: role,
      //       approvedByAdmin: false,
      //     },
      //   }
      // })

      // if (created) {
      //   console.log("user is created!")
      // } else {
      //   console.log("user was retrieved")
      // }
      res.status(200).json("working!");
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: true, msg: err.message });
    }
  }
}

module.exports = UsersController;
