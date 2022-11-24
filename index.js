const { Network, Alchemy } = require('alchemy-sdk');
const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors')
const Data = require("./models/dataModel");
const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())

//Connecting to mongoDb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

const settings = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// Main function
app.post("/api/getData", async (req, res) => {

  //Getting the whole transactions details
  const data = await alchemy.core.getAssetTransfers({
    category: ["external", "internal", "erc20", "erc721", "erc1155"],
    order: "desc"
  });

  //Setting variables
  let max = data.transfers[0].value;
  let maxArray = []
  let sum = 0

  //Getting the transfer with the max value 
  for (let i = 0; i < data.transfers.length; i++) {
    if (data.transfers[i].value > max) {
      max = data.transfers[i].value;
      maxArray = data.transfers[i]
    }
  }

  //Getting the total sum of transaction 
  for (let i = 0; i < data.transfers.length; i++) {
    if (data.transfers[i].value > 0 && i <= 1500) {
      sum = (sum * 1) + (data.transfers[i].value * 1)
    }
  }


  //Saving in the database
  try {

    //Checking if a data exists for the token already
    const tokenData = await Data.findOne({
      tokenAddress: "ETH_MAINNET"
    })

    //If the token's data exists already
    if (tokenData) {
      const newData = await Data.findOneAndUpdate(
        {
          tokenAddress: "ETH_MAINNET"
        },
        {
          sentMost: maxArray.from,
          receivedMost: maxArray.to,
          totalAmount: sum
        })
    }

    //If the token's data does not exist already
    else {
      const newData = await Data.create({
        tokenAddress: "ETH_MAINNET",
        sentMost: maxArray.from,
        receivedMost: maxArray.to,
        totalAmount: sum
      })
    }
  }
  catch (err) {
    res.json(err)
  }

  //Returns

  res.json({
    sendsMost: maxArray.from,
    receivedMost: maxArray.to,
    SumOfLatestTransactions: sum
  })

})

app.listen(process.env.PORT || '1564', () => {
  console.log("connected to server successful")
})
