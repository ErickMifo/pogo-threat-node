const fetch = require('node-fetch');

async function getPoke(ID) {
    
  let response = await fetch(`http://localhost:3001/pokemons/${ID}`);
  let data = await response.json()
 
  return data.pokemon;
}




module.exports = getPoke;
