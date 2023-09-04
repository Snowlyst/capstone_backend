const BaseController = require("./baseController");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

class JobListingsController extends BaseController {
  constructor(model, jobCategoryModel, companyProfileInfoModel, locationModel) {
    super(model);
    this.jobCategoryModel = jobCategoryModel;
    this.companyProfileInfoModel = companyProfileInfoModel;
    this.locationModel = locationModel;
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
  async getOneCategory(req, res) {
    try {
      const { jobCategoryId } = req.params;
      const output = await this.model.findAll({
        where: {
          jobCategoryId: jobCategoryId,
        },
        include: [
          {
            model: this.companyProfileInfoModel,
          },
          {
            model: this.jobCategoryModel,
          },
        ],
      });
      res.status(200).json({ success: true, output });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
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

  async getAllCategorySorted(req, res) {
    try {
      const output = await this.jobCategoryModel.findAll({
        order: [["name", "ASC"]],
      });
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
      const { jobCategoryId } = req.params;
      const output = await this.model.findAll({
        where: {
          jobCategoryId: jobCategoryId,
        },
        include: [
          {
            model: this.companyProfileInfoModel,
          },
          {
            model: this.jobCategoryModel,
          },
        ],
      });
      res.status(200).json({ success: true, output });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    }
  }

  async getListingByUserId(req, res) {
    try {
      const { userId } = req.params;
      const firstOutput = await this.companyProfileInfoModel.findAll({
        where: {
          userId: userId,
        },
      });
      const companyIdToSearch = [];
      firstOutput.map((info) => {
        return companyIdToSearch.push(info.dataValues.id);
      });
      const output = await this.model.findAll({
        where: {
          companyId: companyIdToSearch,
        },
        include: [
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

  async getLocation(req, res) {
    try {
      const output = await this.locationModel.findAll();
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, error: error });
    }
  }

  async getJobBySearch(req, res) {
    const { categoryQuery, typeQuery, locationQuery } = req.body;
    let newLocationQuery;
    if (locationQuery === 6) {
      newLocationQuery = [1, 2, 3, 4, 5, 6];
    } else {
      newLocationQuery = locationQuery;
    }
    console.log(categoryQuery, typeQuery, newLocationQuery);
    try {
      const output = await this.model.findAll({
        where: {
          employmentType: typeQuery,
          jobCategoryId: categoryQuery,
          locationId: newLocationQuery,
          approvalByAdmin: true,
        },
        include: [
          {
            model: this.companyProfileInfoModel,
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

  async getJobOnMount(req, res) {
    const { typeQuery, locationQuery } = req.body;
    let newLocationQuery;
    if (locationQuery === "6") {
      newLocationQuery = [1, 2, 3, 4, 5, 6];
    } else {
      newLocationQuery = locationQuery;
    }
    console.log(String(typeQuery), newLocationQuery);
    try {
      const output = await this.model.findAll({
        where: {
          employmentType: String(typeQuery),
          locationId: newLocationQuery,
          approvalByAdmin: true,
        },
        include: [
          {
            model: this.companyProfileInfoModel,
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

  async checkUnverifiedJob(req, res) {
    try {
      const output = await this.model.findAll({
        where: {
          approvalByAdmin: false,
        },
        include: [
          {
            model: this.companyProfileInfoModel,
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

  async acceptUnverifiedJob(req, res) {
    try {
      const { jobId } = req.body;
      const output = await this.model.update(
        {
          approvalByAdmin: true,
        },
        {
          where: {
            id: jobId,
          },
        }
      );
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: true, msg: error.message });
    }
  }

  async requestChangeToJob(req, res) {
    try {
      const { jobId, rejectReason } = req.body;
      const output = await this.model.update(
        {
          commentOnNotApproved: rejectReason,
        },
        {
          where: {
            id: jobId,
          },
        }
      );
      res.status(200).json(output);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: true, msg: error.message });
    }
  }

  // this is for linked in scraping to test
  async getData(req, res) {
    console.log("In Controller Job listings > getData");
    console.log(req.body);
    const { url } = req.body;

    // const url = "https://www.linkedin.com/jobs/view/3682714831/";
    // const url = "https://www.linkedin.com/jobs/view/3689173351";
    // const url = "https://www.linkedin.com/jobs/view/3628237792";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
      await page.goto(url);
      const moreButtonSelector =
        'aria/Show more, visually expands previously read content above[role="button"]';
      await page.click(moreButtonSelector);

      const data = await page.content();
      const $ = cheerio.load(data);

      const mainTitle = $("h1").text();

      const puppeteerHtml = $(".show-more-less-html__markup").html();
      console.log(puppeteerHtml);
      const objectsArray = [];
      // let currentObject = {};
      let index = 0;
      let description = "";

      // objectsArray.push({ description: puppeteerHtml });
      // Split the HTML by </p> tags to extract paragraphs
      const paragraphs = puppeteerHtml.split(/<\/p>/);
      while (index < paragraphs.length) {
        //       currentObject = {};
        const paragraph = paragraphs[index];
        const titleMatch = paragraph.match(/<strong>(.*?)<\/strong><p><br>/);
        if (titleMatch) {
          const nextParagraph = paragraphs[index + 1];
          const title = titleMatch[1].replace(/<u>|<\/u>/g, "");
          const content = nextParagraph
            // .replace(/<[^>]*>/g, "")
            // .replace(/<u>|<\/u>/g, "")
            .trim();
          // currentObject = {
          //   title: `<p>${title}</p>`,
          //   contents: `<p>${content}</p>`,
          // };

          //Add title and content to description
          description += `<p><strong>${title}</strong></p><p>${content}</p>`;

          index += 2;
        } else {
          const contents = paragraph
            .replace(/<[^>]*>/g, "")
            // .replace(/<u>|<\/u>/g, "")
            .trim();
          if (contents !== "") {
            // currentObject = {
            //   title: null,
            //   contents: `<p>${contents}</p>`,
            // };
            description += `<p>${contents}</p>`;
          }

          index += 1;
        }

        console.log(objectsArray);
        // if (currentObject !== null) {
        //   objectsArray.push(currentObject);
        // }
      }
      objectsArray.push({ mainTitle: mainTitle, description: description });
      await browser.close();

      res.status(200).send(objectsArray);
    } catch (error) {
      res.status(500).send({ error: true, msg: error.message });
    }
  }
}
module.exports = JobListingsController;
