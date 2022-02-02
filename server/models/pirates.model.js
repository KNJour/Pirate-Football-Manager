const mongoose = require("mongoose");
const pirateSchema = new mongoose.Schema({

    name: { type: String, required: [true, "Pirate Name is required"]},
    image: { type: String, required: [true, "image url is required"]},
    treasure: { type: Number, required: [true, "number of treasure chests is required"]},
    catchPhrase: { type: String, required: [true, "Catch Phrase is required for some reason"]},
    position: { type: String, required: [true, "position is required"]},
    pegleg: { type: Boolean},
    eyepatch: { type: Boolean},
    hook: { type: Boolean }
    
})

const Pirates = mongoose.model("pirates", pirateSchema);
module.exports = Pirates;