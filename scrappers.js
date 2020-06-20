const puppeteer = require('puppeteer');
const getPoke = require('./getPoke');
const getID = require('./getID')

var PokeTeams = [];

async function scrapperEach() {
  var a = await getID(0) 
  var b = await getID(1)
  var c = await getID(2)
  var d = await getID(3)
  var e = await getID(4)

combs = [
[a, b, c], [a, b, d],[a, c, d], [a, b, e], [a, c, e],
[a, d, e], [b , c, e], [b, d, e], [c, d, e], [b, c, d] ]
  combs.forEach((combs, index) => {
var   ID = combs[0];
var   ID1 = combs [1];
var   ID2 = combs [2]; 
      async function scrapper () {

    const browser = await puppeteer.launch({headless: false, slowMo:50});
    const page = await browser.newPage();
    await page.goto('https://pvpoke.com/team-builder/');
    
  // Open import/export
      const aba = await page.$x('//*[@id="main"]/div[2]/div[1]/div/div[1]/button[2]');
      await aba[0].click();
  
  // input pokemons 

      const team = await page.$x('/html/body/div[2]/div/div[3]/div/textarea');
      await team[0].type('' + await getPoke(ID) + '\n' + await getPoke(ID1) + 
      '\n' + await getPoke(ID2) + '');
  
  // click Import
      await page.click('body > div.modal > div > div.modal-content > div > div.center > div')
  
  // click Generate
    const aba2 = await page.$x('//*[@id="main"]/button');
    await aba2[0].click();
  
  // Get Result
  
      const[el] = await page.$x('/html/body/div/div/div[4]/div[3]/p[2]/b');
      const txt = await el.getProperty('textContent');
      const threat = await txt.jsonValue();
  
    PokeTeams.push({threat}, `${await getPoke(ID)}, ${await getPoke(ID1)}, ${await getPoke(ID2)}`)
    browser.close();
    return PokeTeams
    console.log (PokeTeams)
  }
  
setTimeout(() => {
        scrapper()
      }, 35000 * index);


})}



scrapperEach()




