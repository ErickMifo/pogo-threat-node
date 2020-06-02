const puppeteer = require('puppeteer');
const getPoke = require('./getPoke');
const a = 
{
   "a": "5ed6bee8f747c0015fe7e1ea"
};
const b = 
{
  "a": "5ed6bf28f747c0015fe7e1eb"
};
const c = 
{
  "a": "5ed6bf3af747c0015fe7e1ec"
};
const d = 
{
  "a": "5ed6bf49f747c0015fe7e1ed"
}


combs = [
[a.a, b.a, c.a], [a.a, b.a, d.a],[a.a, c.a, d.a],
[b.a, c.a, d.a] ]
var ID = ''
var ID1 = ''
var ID2 = ''

 combs.forEach((combs) => {
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
      await team[0].type('' + await getPoke.getPoke(ID) + '\n' + await getPoke.getPoke(ID1) + 
      '\n' + await getPoke.getPoke(ID2) + '');
  
  // click Import
      await page.click('body > div.modal > div > div.modal-content > div > div.center > div')
  
  // click Generate
    const aba2 = await page.$x('//*[@id="main"]/button');
    await aba2[0].click();
  
  // Get Result
  
      const[el] = await page.$x('/html/body/div/div/div[4]/div[3]/p[2]/b');
      const txt = await el.getProperty('textContent');
      const threat = await txt.jsonValue();
  
    await console.log({threat})
     
    await browser.close();
  }
  scrapper()


})





