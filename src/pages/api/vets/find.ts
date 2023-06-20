import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const vetsDatabaseLink = "https://www.znanylekarz.pl/weterynarz/";

  try {
    const { keyword } = req.query;
    if (!keyword) {
      return res.status(400).json({ error: "Keyword is missing" });
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(vetsDatabaseLink + keyword);

    const data = await page.evaluate(() => {
      const vetOffers = document.querySelectorAll("#search-content > ul > li");

      // const vetsDatas = vetOffers.map((li) => {

      // })

      return { vetOffers };
    });

    await browser.close();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
}
