const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const IpShema = new mongoose.Schema(
  {
    ip: { type: String, unique: true, required: [true, "Set Ip"] },
  },
  { versionKey: false, timestamps: true }
);

const Ip = mongoose.model("user", IpShema);

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body.ip);
    await Ip.create({ ip: req.body.ip });
    res.send({ IP: req.ip });
  } catch (error) {
    res.send({ IP: req.ip });
  }
});

module.exports = router;
