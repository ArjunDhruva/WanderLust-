require("dotenv").config();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then(async () => {
    console.log("✅ MongoDB Connected");

    await initDB();   // ✅ run AFTER connection

    mongoose.connection.close();
  })
  .catch((err) => console.log(err));

const initDB = async () => {
  await Listing.deleteMany({});  // optional (clears old data)

  const listings = initData.data.map((obj) => ({
    ...obj,
    owner: new mongoose.Types.ObjectId("69e25ba638efccda06833935"), // ✅ valid ObjectId
    geometry: {
      type: "Point",
      coordinates: [77.2090, 28.6139], // default (Delhi)
    },
  }));

  await Listing.insertMany(listings);

  console.log("✅ Data inserted successfully");
};