const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({

    pizzaName: {
        type: String
    },
    createdVy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []

});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;