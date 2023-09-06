const BaseController = require("./baseController");

class CreateResumeController extends BaseController {
  constructor(
    user,
    userExperienceDetailModel,
    userEducationalDetailModel,
    userSkillDetailModel,
    userLanguageDetailModel,
    userAdditionalDetailModel,
    userAboutmeDetailModel,
    userPrivacyDetailModel
  ) {
    super(user);
    this.userExperienceDetailModel = userExperienceDetailModel;
    this.userEducationalDetailModel = userEducationalDetailModel;
    this.userSkillDetailModel = userSkillDetailModel;
    this.userLanguageDetailModel = userLanguageDetailModel;
    this.userAdditionalDetailModel = userAdditionalDetailModel;
    this.userAboutmeDetailModel = userAboutmeDetailModel;
    this.userPrivacyDetailModel = userPrivacyDetailModel;
  }
  async addExperience(req, res) {
    try {
      const { userId } = req.params;
      const {
        positionTitle,
        companyName,
        startPeriod,
        endPeriod,
        specialization,
        role,
        country,
        industry,
        positionLevel,
        monthlySalary,
        executiveSummary,
      } = req.body;
      const output = this.userExperienceDetailModel.findOrCreate({
        where: {
          userId: userId,
          positionTitle: positionTitle,
          companyName: companyName,
        },
        defaults: {
          userId: userId,
          positionTitle: positionTitle,
          companyName: companyName,
          startPeriod: startPeriod,
          endPeriod: endPeriod,
          specialization: specialization,
          role: role,
          country: country,
          industry: industry,
          positionLevel: positionLevel,
          monthlySalary: monthlySalary,
          executiveSummary: executiveSummary,
        },
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }

  async getUserExperience(req, res) {
    try {
      const { userId } = req.params;
      const output = await this.userExperienceDetailModel.findAll({
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
  async deleteExperience(req, res) {
    try {
      const { experienceId } = req.params;
      await this.userExperienceDetailModel.destroy({
        where: {
          id: experienceId,
        },
      });
      res.status(200).json({ success: true, message: "Experience Deleted" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async editExperience(req, res) {
    try {
      const {
        positionTitle,
        companyName,
        startPeriod,
        endPeriod,
        specialization,
        role,
        country,
        industry,
        positionLevel,
        monthlySalary,
        executiveSummary,
      } = req.body;
      const { experienceId } = req.params;
      await this.userExperienceDetailModel.update(
        {
          positionTitle: positionTitle,
          companyName: companyName,
          startPeriod: startPeriod,
          endPeriod: endPeriod,
          specialization: specialization,
          role: role,
          country: country,
          industry: industry,
          positionLevel: positionLevel,
          monthlySalary: monthlySalary,
          executiveSummary: executiveSummary,
          updatedAt: new Date().toISOString(),
        },
        {
          where: {
            id: experienceId,
          },
        }
      );
      const output = await this.userExperienceDetailModel.findAll({
        where: {
          id: experienceId,
        },
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async addEducation(req, res) {
    try {
      const { userId } = req.params;
      const {
        institute,
        graduationDate,
        qualification,
        instituteLocation,
        fieldOfStudy,
        major,
        grade,
        award,
      } = req.body;
      const output = this.userEducationalDetailModel.findOrCreate({
        where: {
          userId: userId,
          institute: institute,
          instituteLocation: instituteLocation,
          graduationDate: graduationDate,
        },
        defaults: {
          userId: userId,
          institute: institute,
          graduationDate: graduationDate,
          qualification: qualification,
          instituteLocation: instituteLocation,
          fieldOfStudy: fieldOfStudy,
          major: major,
          grade: grade,
          award: award,
        },
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async getUserEducation(req, res) {
    try {
      const { userId } = req.params;
      const output = await this.userEducationalDetailModel.findAll({
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
  async deleteEducation(req, res) {
    try {
      const { educationId } = req.params;
      await this.userEducationalDetailModel.destroy({
        where: {
          id: educationId,
        },
      });
      res.status(200).json({ success: true, message: "Education Deleted" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async editEducation(req, res) {
    try {
      const {
        institute,
        graduationDate,
        qualification,
        instituteLocation,
        fieldOfStudy,
        major,
        grade,
        award,
      } = req.body;
      const { educationId } = req.params;
      await this.userEducationalDetailModel.update(
        {
          institute: institute,
          graduationDate: graduationDate,
          qualification: qualification,
          instituteLocation: instituteLocation,
          fieldOfStudy: fieldOfStudy,
          major: major,
          grade: grade,
          award: award,
          updatedAt: new Date().toISOString(),
        },
        {
          where: {
            id: educationId,
          },
        }
      );
      const output = await this.userEducationalDetailModel.findAll({
        where: {
          id: educationId,
        },
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async getSkill(req, res) {
    try {
      const { userId } = req.params;
      const output = await this.userSkillDetailModel.findAll({
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
  async addSkill(req, res) {
    try {
      const { userId } = req.params;
      const { skill, proficiency } = req.body;
      const output = this.userSkillDetailModel.findOrCreate({
        where: {
          userId: userId,
          skill: skill,
        },
        defaults: {
          userId: userId,
          skill: skill,
          proficiency: proficiency,
        },
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async deleteSkill(req, res) {
    try {
      const { skillId } = req.params;
      await this.userSkillDetailModel.destroy({
        where: {
          id: skillId,
        },
      });
      res.status(200).json({ success: true, message: "Skill Deleted" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async editSkill(req, res) {
    try {
      const { skill, proficiency } = req.body;
      const { skillId } = req.params;
      await this.userSkillDetailModel.update(
        {
          skill: skill,
          proficiency: proficiency,

          updatedAt: new Date().toISOString(),
        },
        {
          where: {
            id: skillId,
          },
        }
      );
      const output = await this.userSkillDetailModel.findAll({
        where: {
          id: skillId,
        },
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async getLanguage(req, res) {
    try {
      const { userId } = req.params;
      const output = await this.userLanguageDetailModel.findAll({
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
  async addLanguage(req, res) {
    try {
      const { userId } = req.params;
      const { language, spoken, written, ifPrimary } = req.body;
      const output = this.userLanguageDetailModel.findOrCreate({
        where: {
          userId: userId,
          language: language,
        },
        defaults: {
          userId: userId,
          language: language,
          spoken: spoken,
          written: written,
          ifPrimary: ifPrimary,
        },
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async deleteLanguage(req, res) {
    try {
      const { languageId } = req.params;
      await this.userLanguageDetailModel.destroy({
        where: {
          id: languageId,
        },
      });
      res.status(200).json({ success: true, message: "Skill Deleted" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async editLanguage(req, res) {
    try {
      const { language, spoken, written, ifPrimary } = req.body;
      const { languageId } = req.params;
      await this.userLanguageDetailModel.update(
        {
          language: language,
          spoken: spoken,
          written: written,
          ifPrimary: ifPrimary,

          updatedAt: new Date().toISOString(),
        },
        {
          where: {
            id: languageId,
          },
        }
      );
      const output = await this.userLanguageDetailModel.findAll({
        where: {
          id: languageId,
        },
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async getInfo(req, res) {
    try {
      const { userId } = req.params;
      const output = await this.userAdditionalDetailModel.findAll({
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
  async addInfo(req, res) {
    try {
      const { userId } = req.params;
      const { expectedSalary, preferredWorkLocation } = req.body;
      const [output, created] =
        await this.userAdditionalDetailModel.findOrCreate({
          where: {
            userId: userId,
          },
          defaults: {
            userId: userId,
            expectedSalary: expectedSalary,
            preferredWorkLocation: preferredWorkLocation,
          },
        });
      console.log(req.body);
      console.log(expectedSalary);
      console.log(preferredWorkLocation);
      console.log(created);
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async deleteInfo(req, res) {
    try {
      const { additionalInfoId } = req.params;
      await this.userAdditionalDetailModel.destroy({
        where: {
          id: additionalInfoId,
        },
      });
      res
        .status(200)
        .json({ success: true, message: "Additional Info Deleted" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async editInfo(req, res) {
    try {
      const { expectedSalary, preferredWorkLocation } = req.body;
      const { additionalInfoId } = req.params;
      await this.userAdditionalDetailModel.update(
        {
          expectedSalary: expectedSalary,
          preferredWorkLocation: preferredWorkLocation,
          updatedAt: new Date().toISOString(),
        },
        {
          where: {
            id: additionalInfoId,
          },
        }
      );
      const output = await this.userAdditionalDetailModel.findAll({
        where: {
          id: additionalInfoId,
        },
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async getSelf(req, res) {
    try {
      const { userId } = req.params;
      const output = await this.userAboutmeDetailModel.findAll({
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
  async addSelf(req, res) {
    try {
      const { userId } = req.params;
      const {
        name,
        contactNumber,
        email,
        address,
        postalCode,
        unitNumber,
        dateOfBirth,
        nationality,
      } = req.body;
      const output = this.userAboutmeDetailModel.create({
        userId: userId,
        name: name,
        contactNumber: contactNumber,
        email: email,
        address: address,
        postalCode: postalCode,
        unitNumber: unitNumber,
        dateOfBirth: dateOfBirth,
        nationality: nationality,
      });
      console.log(name);
      console.log(email);
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async deleteSelf(req, res) {
    try {
      const { selfInfoId } = req.params;
      await this.userAboutmeDetailModel.destroy({
        where: {
          id: selfInfoId,
        },
      });
      res
        .status(200)
        .json({ success: true, message: "Self Information Deleted" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async editSelf(req, res) {
    try {
      const {
        name,
        contactNumber,
        email,
        address,
        postalCode,
        unitNumber,
        dateOfBirth,
        nationality,
      } = req.body;
      const { selfInfoId } = req.params;
      await this.userAboutmeDetailModel.update(
        {
          name: name,
          contactNumber: contactNumber,
          email: email,
          address: address,
          postalCode: postalCode,
          unitNumber: unitNumber,
          dateOfBirth: dateOfBirth,
          nationality: nationality,
          updatedAt: new Date().toISOString(),
        },
        {
          where: {
            id: selfInfoId,
          },
        }
      );
      const output = await this.userAboutmeDetailModel.findAll({
        where: {
          id: selfInfoId,
        },
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async addPrivacy(req, res) {
    try {
      const { userId } = req.params;
      const { searchable } = req.body;
      const output = this.userPrivacyDetailModel.create({
        userId: userId,
        searchable: searchable,
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async deletePrivacy(req, res) {
    try {
      const { privacyId } = req.params;
      await this.userPrivacyDetailModel.destroy({
        where: {
          id: privacyId,
        },
      });
      res.status(200).json({ success: true, message: "Skill Deleted" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
  async editPrivacy(req, res) {
    try {
      const { searchable } = req.body;
      const { privacyId } = req.params;
      await this.userPrivacyDetailModel.update(
        {
          searchable: searchable,

          updatedAt: new Date().toISOString(),
        },
        {
          where: {
            id: privacyId,
          },
        }
      );
      const output = await this.userPrivacyDetailModel.findAll({
        where: {
          id: privacyId,
        },
      });
      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }
}
module.exports = CreateResumeController;
