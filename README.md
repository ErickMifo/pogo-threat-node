# pogo-threat
input your DB pokemon to Pvpoke team builder and get the threat score

  Casual players can have a really hard time on PokemonGo GoBattleLeague since build a team is a really hard task. 
https://pvpoke.com/team-builder/ offers you a solution for this asking you to imput some of your pokemons and returning some data like how those pokemons deal with the meta, but still really hard to build a team since you gotta imput lots of pokemons a lot of times until you figure out what is the best combination for the Pokes that you have.
  
   This application try to solve this problem making you a DataBase of all your pokemons, making a imput 3 by 3 on https://pvpoke.com/team-builder/ , getting the "threat score" of all of your possible teams (using Cn,p = n!/p! (n – p)!) and just letting you choose the order of the team you picked.
   
   So as you can notice, it do not build THE BEST POSSIBLE TEAM WITH YOUR POKEMONS, but it can save a lot of time of a casual Go Battle League player. 
   
   
Installation

  *THIS IS MY FIRST CODE, SO ITS REALLY NOT CLEAN OR SMART AT ALL* plus i got some code from https://github.com/Rocketseat to make a DB.

  To begin, you’ll need:
  
  Nodejs, MongoDB, express, mongoose, node-fetch, puppeteer, requireDir, mongoose-paginate ( this last 2 are optional ).
  
You'll need to create a Database (mine is called "teste", so if you name it differently, change the url on the "server.js") and a collection (mine's called products) with your pokemons like "name" : "azumarill,BUBBLE,HYDRO_PUMP,ICE_BEAM".

Next steps

My database organization its a mess, so I need to make all the ./src stuff more intuitive 

get the scrappers results and post on my DB 
