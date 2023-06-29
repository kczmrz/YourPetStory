import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import VetResult from "@/types/VetResult";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const vetsDatabaseLink = "https://www.znanylekarz.pl/weterynarz/";

  if (req.method === "GET") {
    try {
      const { keyword } = req.query;
      if (!keyword) {
        return res.status(400).json({ error: "Keyword is missing" });
      }
      const browser = await puppeteer.launch({
        defaultViewport: {
          width: 1920,
          height: 1080,
        },
        args: ["--incognito"],
        headless: false,
      });
      const page = await browser.newPage();
      await page.goto(vetsDatabaseLink + keyword);

      const offers = await page.$$("#search-content > ul > li");
      const offersAmount = offers.length;

      const result: VetResult[] = [];

      for (let i = 1; i < offersAmount; i++) {
        const name = await page.$eval(
          `#search-content > ul > li:nth-child(${i}) div.card-body div.result-column .dp-doctor-card .media .media-body h3 a`,
          (element) => element.innerText
        );

        const address = await page.$eval(
          `#search-content > ul > li:nth-child(${i}) div.card-body div.result-column .doctor-card-address div:nth-child(2) .d-flex span:nth-child(1)`,
          (element) => element.innerText
        );

        const imageLink = await page.$eval(
          `#search-content > ul > li:nth-child(${i}) div div div div.col-lg-6.result-column.p-2 div.dp-doctor-card.dp-doctor-card-md div div.pr-1 a span img`,
          (element) => element.src
        );

        result.push({
          name: name,
          address: address,
          imagePath: imageLink,
        });
      }

      await browser.close();

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  } else {
    res.status(500).json({ error: "An error occurred" });
  }
}
