const fetch = require('node-fetch');

const getID = async function geID(Number) {
    try{    
  let response = await fetch('http://localhost:3001/pokemons');
  let data = await response.json()
  return data.docs[Number]._id;
    } catch(err) {
        console.log(err.msg)
    }
}


exports.getID = getID;
