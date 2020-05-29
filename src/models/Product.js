const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    pokemon: {
        type: String,
        required: true,
    },
    pokemonID: {
        type: String,
        required: true
    }
    
    });

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);
