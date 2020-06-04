const puppeteer = require('puppeteer');
const getPoke = require('./getPoke');
const getID = require('./getID')

var a =   ''
var b =  ''
var c =  ''
var d = '' 


async function scrapperEach() {
  var a = await getID.getID(0) 
  var b = await getID.getID(1)
  var c = await getID.getID(2)
  var d = await getID.getID(3)
  var e = await getID.getID(4)

combs = [
[a, b, c], [a, b, d],[a, c, d], [a, b, e], [a, c, e],
[a, d, e], [b , c, e], [b, d, e], [c, d, e], [b, c, d] ]
var ID = ''
var ID1 = ''
var ID2 = ''
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
  
    await console.log({threat}, `${await getPoke.getPoke(ID)}, ${await getPoke.getPoke(ID1)}, ${await getPoke.getPoke(ID2)}`)
     
    await browser.close();
  }
  
setTimeout(() => {
        scrapper()
      }, 35000 * index);


})}



scrapperEach()




