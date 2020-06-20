const fetch = require('node-fetch');

async function getID(Number) {
    
  let response = await fetch('http://localhost:3001/pokemons');
  let data = await response.json()
  
  return data.docs[Number]._id;
}


module.exports = getID;
