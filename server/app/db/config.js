const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB is connected at host ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
