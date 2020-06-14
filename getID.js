const fetch = require('node-fetch');

async function getID(Number) {
    try{    
  let response = await fetch('http://localhost:3001/pokemons');
  let data = await response.json()
  return data.docs[Number]._id;
    } catch(err) {
        console.log(err.msg)
    }
}


exports.getID = getID;
