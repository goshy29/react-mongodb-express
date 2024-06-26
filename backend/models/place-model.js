const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema({
    title: {type: String, required: true},
    place: {type: String, required: true},
    country: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model("Place", placeSchema);