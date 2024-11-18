const mongoose = require("mongoose");

const bookSchemaa = mongoose.Schema({
  train: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Train",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  passengers: [
    {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
      berthPreference: {
        type: String,
        required: true,
      },
      nationality: {
        type: String,
        required: true,
      },
    },
  ],
});

const Bookk = mongoose.model("Bookk", bookSchemaa);
module.exports = Bookk;
