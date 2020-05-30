const fetch = require('node-fetch');

const getPoke = async function getPoke(ID) {
    try{    
  let response = await fetch('http://localhost:3001/api/products/' + ID);
  let data = await response.json()
 
  return data.pokemon;
    } catch(err) {
        console.log(err.msg)
    }
}




exports.getPoke = getPoke;
