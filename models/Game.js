const { Schema, model } = require('mongoose');

const GameSchema = Schema({

    id: {
        type: Number,
        required: true
    },
    cover: {
        type: Object,        
    },

    genres: {
        type: Array,
    },
    name : {
        type: String,
        required: true
    },
    summary : {
        type: String
    },
    storyline: {
        type: String
    },
    rating: {
        type: Number
    },
    screenshots: {
        type: Array
    },
    follows: {
        type: Number
    }

});

// GameSchema.method('toJSON', function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
// });



module.exports = model('Game', GameSchema );

