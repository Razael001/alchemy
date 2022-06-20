const mongoose = require('mongoose')

const messageModel = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true}
}, {collection: "messages"})

const model = mongoose.model("messages", messageModel)
module.exports = model;