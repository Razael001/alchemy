const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const Messages = require("./models/messageModel")
const path = require('path')


app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://azeez:Raza2003@cluster0.1rnci.mongodb.net/portfolio?retryWrites=true&w=majority");

app.post("/api/sendmessage", async(req, res) => {
  try {
    await Messages.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    })
    res.json({status: "message sent", sent: true })
  }
  catch(err) {
    res.json({status: "not sent", sent: false})
  }
})

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen('1564', () => {
  console.log("connected successful")
})