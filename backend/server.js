const express = require('express');
const puppeteer = require('puppeteer');
const leagueDictionary = require('./leagueUtils')
const utils = require('./utils');
const cors = require('cors');

const app = express();
app.use(cors())

app.get('/badges/:leagueName', async (req, res) => {
  const { leagueName } = req.params;
  const league = leagueDictionary[leagueName].competitionName;
  const leagueCode = leagueDictionary[leagueName].competitionId;
  const imageSizes = ['tiny', 'small', 'medium', 'big'];
  let premierLeagueItems = [];

  //browers setup, launch and go to site
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp"
  });
  const page = await browser.newPage();
  await page.goto(`https://www.transfermarkt.co.uk/${league}/startseite/wettbewerb/${leagueCode}`, {
    waitUntil: 'networkidle2',  // <-- good practice to wait for page to fully load 
  });

  //get all teams from table
  const allTeams = await page.$$('#yw1 tbody tr')

  //loop through each row, pick out the teamName and img and add to array
  for (const team of allTeams) {
    try {
      const teamName = await page.evaluate(teamElement => teamElement.querySelector('.hauptlink a').textContent, team)
      const badgeUrl = await page.evaluate(teamElement => teamElement.querySelector('.zentriert a img').getAttribute('src'), team)
      premierLeagueItems = [...premierLeagueItems, { name: teamName, badges: utils.getAllBadgeSizes(badgeUrl, imageSizes) }]
    } catch (e) {
      console.log('errer -> ', e)
    }
  }

  //return json array
  res.json(premierLeagueItems)
  await browser.close();
});

app.listen(5000);