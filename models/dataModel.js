const mongoose = require('mongoose')

const dataModel = new mongoose.Schema({
    tokenAddress: {type: String, required: true},
    sentMost: {type: String, required: true},
    receivedMost: {type: String, required: true},
    totalAmount: {type: Number, required: true}
}, {collection: "alchemy"})

const model = mongoose.model("alchemy", dataModel)
module.exports = model;