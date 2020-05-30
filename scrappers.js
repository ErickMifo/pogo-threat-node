const puppeteer = require('puppeteer');
const getPoke = require('./getPoke');
const getPoke1 = require('./getPoke');
const getPoke2 = require('./getPoke');
const a = 
{
   "a": "5ece9ba4ccaea0961caf9905"
};
const b = 
{
  "a": "5ece9e438f840bd9d092bf52"
};
const c = 
{
  "a": "5ece9e438f840bd9d092bf53"
};
const d = 
{
  "a": "5ece9f8c8f840bd9d092bf54"
}
const comb1 =  [a.a, b.a, c.a];
const comb2 =  [a.a, b.a, d.a];
const comb3 =  [a.a, c.a, d.a];
const comb4 =  [b.a, c.a, d.a];
var ID = ''
var ID1 = ''
var ID2 = ''
var [ID, ID1, ID2] = comb1 

// i need to make a loop to go through all the combinations of the pokemons

async function tudao() {


 async function scrapper () {
  var [ID, ID1, ID2] = comb1 
  const browser = await puppeteer.launch({headless: false, slowMo:50});
  const page = await browser.newPage();
  await page.goto('https://pvpoke.com/team-builder/');
  
// open import/export
    const aba = await page.$x('//*[@id="main"]/div[2]/div[1]/div/div[1]/button[2]');
    await aba[0].click();

// input pokemons 
    const team = await page.$x('/html/body/div[2]/div/div[3]/div/textarea');
    await team[0].type('' + await getPoke.getPoke(ID) + '\n' + await getPoke.getPoke(ID1) + 
    '\n' + await getPoke.getPoke(ID2) + '');

// click import
    await page.click('body > div.modal > div > div.modal-content > div > div.center > div')

// click in generate
  const aba2 = await page.$x('//*[@id="main"]/button');
  await aba2[0].click();
  

// GET the result 

    const[el] = await page.$x('/html/body/div/div/div[4]/div[3]/p[2]/b');
    const txt = await el.getProperty('textContent');
    const threat = await txt.jsonValue();



  await console.log({threat})
   

  await browser.close();
};

await scrapper()




async function scrapper1 () {
  var [ID, ID1, ID2] = comb2
  const browser = await puppeteer.launch({headless: false, slowMo:50});
  const page = await browser.newPage();
  await page.goto('https://pvpoke.com/team-builder/');
  
    const aba = await page.$x('//*[@id="main"]/div[2]/div[1]/div/div[1]/button[2]');
    await aba[0].click();


    const team = await page.$x('/html/body/div[2]/div/div[3]/div/textarea');
    await team[0].type('' + await getPoke.getPoke(ID) + '\n' + await getPoke.getPoke(ID1) + 
    '\n' + await getPoke.getPoke(ID2) + '');

    await page.click('body > div.modal > div > div.modal-content > div > div.center > div')

  const aba2 = await page.$x('//*[@id="main"]/button');
  await aba2[0].click();
  
    const[el] = await page.$x('/html/body/div/div/div[4]/div[3]/p[2]/b');
    const txt = await el.getProperty('textContent');
    const threat = await txt.jsonValue();



  await console.log({threat})
   

  await browser.close();
};


await scrapper1()

 async function scrapper2 () {
  var [ID, ID1, ID2] = comb3 
  const browser = await puppeteer.launch({headless: false, slowMo:50});
  const page = await browser.newPage();
  await page.goto('https://pvpoke.com/team-builder/');
  
    const aba = await page.$x('//*[@id="main"]/div[2]/div[1]/div/div[1]/button[2]');
    await aba[0].click();

    const team = await page.$x('/html/body/div[2]/div/div[3]/div/textarea');
    await team[0].type('' + await getPoke.getPoke(ID) + '\n' + await getPoke.getPoke(ID1) + 
    '\n' + await getPoke.getPoke(ID2) + '');

    await page.click('body > div.modal > div > div.modal-content > div > div.center > div')

  const aba2 = await page.$x('//*[@id="main"]/button');
  await aba2[0].click();
 
    const[el] = await page.$x('/html/body/div/div/div[4]/div[3]/p[2]/b');
    const txt = await el.getProperty('textContent');
    const threat = await txt.jsonValue();



  await console.log({threat})
   

  await browser.close();
};

await scrapper2()

 async function scrapper3 () {
  var [ID, ID1, ID2] = comb4
  const browser = await puppeteer.launch({headless: false, slowMo:50});
  const page = await browser.newPage();
  await page.goto('https://pvpoke.com/team-builder/');
  
    const aba = await page.$x('//*[@id="main"]/div[2]/div[1]/div/div[1]/button[2]');
    await aba[0].click();

    const team = await page.$x('/html/body/div[2]/div/div[3]/div/textarea');
    await team[0].type('' + await getPoke.getPoke(ID) + '\n' + await getPoke.getPoke(ID1) + 
    '\n' + await getPoke.getPoke(ID2) + '');

    await page.click('body > div.modal > div > div.modal-content > div > div.center > div')

  const aba2 = await page.$x('//*[@id="main"]/button');
  await aba2[0].click();
  

    const[el] = await page.$x('/html/body/div/div/div[4]/div[3]/p[2]/b');
    const txt = await el.getProperty('textContent');
    const threat = await txt.jsonValue();



  await console.log({threat})
   

  await browser.close();
};
await scrapper3()
}
tudao()
