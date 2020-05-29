const fetch = require('node-fetch');

const a =
{
   "a": "5ece9ba4ccaea0961caf9905"
}
const b = 
{
  "a": "5ece9e438f840bd9d092bf52"
}
const c = 
{
  "a": "5ece9e438f840bd9d092bf53"
}



const getPoke = async function getPoke(ID) {
    try{    
  let response = await fetch('http://localhost:3001/api/products/' + ID);
  let data = await response.json()
 
  return data.pokemon;
    } catch(err) {
        console.log(err.msg)
    }
}

const getPoke1 = async function getPoke1(ID1) {
    try{    
  let response = await fetch('http://localhost:3001/api/products/' + ID1);
  let data = await response.json()
 
  return data.pokemon;
    } catch(err) {
        console.log(err.msg)
    }
}

const getPoke2 = async function getPoke2(ID2) {
    try{    
  let response = await fetch('http://localhost:3001/api/products/' + ID2);
  let data = await response.json()
 
  return data.pokemon;
    } catch(err) {
        console.log(err.msg)
    }
}



exports.getPoke = getPoke;
exports.getPoke1 = getPoke1;
exports.getPoke2 = getPoke2;
