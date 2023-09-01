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

  async getJobBySearch(req, res) {
    const { categoryQuery, typeQuery, locationQuery } = req.body;
    let newLocationQuery;
    if (locationQuery === 6) {
      newLocationQuery = [1, 2, 3, 4, 5];
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
      newLocationQuery = [1, 2, 3, 4, 5];
    } else {
      newLocationQuery = locationQuery;
    }
    console.log(String(typeQuery), newLocationQuery);
    try {
      const output = await this.model.findAll({
        where: {
          employmentType: String(typeQuery),
          locationId: newLocationQuery,
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

  // this is for linked in scraping to test
  async getData(req, res) {
    console.log("In Controller Job listings > getData");
    // const targetURL = "https://www.linkedin.com/jobs/view/3682714831/";
    // const targetURL = "https://www.linkedin.com/jobs/view/3689173351";
    const targetURL = "https://www.linkedin.com/jobs/view/3628237792";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
      await page.goto(targetURL);
      const moreButtonSelector =
        'aria/Show more, visually expands previously read content above[role="button"]';
      await page.click(moreButtonSelector);

      const data = await page.content();
      const $ = cheerio.load(data);

      const mainTitle = $("h1").text();

      const puppeteerHtml = $(".show-more-less-html__markup").html();
      console.log(puppeteerHtml);

      const objectsArray = [];
      let currentObject = {};
      let index = 0;
      objectsArray.push({ mainTitle: mainTitle });
      // Split the HTML by </p> tags to extract paragraphs
      const paragraphs = puppeteerHtml.split(/<\/p>|<\/ul>/);
      while (index < paragraphs.length) {
        currentObject = {};
        const paragraph = paragraphs[index];
        const titleMatch = paragraph.match(/<strong>(.*?)<\/strong><p><br>/);
        if (titleMatch) {
          const nextParagraph = paragraphs[index + 1];
          currentObject = {
            title: titleMatch[1].replace(/<u>|<\/u>/g, ""),
            contents: nextParagraph
              .replace(/<[^>]*>/g, "")
              .replace(/<u>|<\/u>/g, "")
              .trim(),
          };

          index += 2;
        } else {
          const contents = paragraph
            .replace(/<[^>]*>/g, "")
            .replace(/<u>|<\/u>/g, "")
            .trim();
          if (contents !== "") {
            currentObject = {
              title: null,
              contents: contents,
            };
          } else {
            currentObject = null;
          }
          index += 1;
        }

        if (currentObject !== null) {
          objectsArray.push(currentObject);
        }
      }
      await browser.close();

      res.status(200).send(objectsArray);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
module.exports = JobListingsController;
