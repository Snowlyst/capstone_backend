const BaseController = require("./baseController");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

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
