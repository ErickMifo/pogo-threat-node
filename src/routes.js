const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/pokemons', ProductController.index);
routes.get('/pokemons/:id', ProductController.show);
routes.post('/pokemons', ProductController.store);
routes.put('/pokemons/:id', ProductController.update);
routes.delete('/pokemons/:id', ProductController.destroy);

module.exports = routes;
