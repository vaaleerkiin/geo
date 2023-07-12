const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const IpShema = new mongoose.Schema(
  {
    ipv6: { type: String, unique: true, required: [true, "Set Ip"] },
    ipv4: String,
  },
  { versionKey: false, timestamps: true }
);

const Ip = mongoose.model("user", IpShema);

router.post("/", async (req, res, next) => {
  const ip = (
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    ""
  ).split(",");
  try {
    await Ip.create({ ipv6: req.body.ip, ipv4: ip[0].trim() });
    res.send({ IPv4: ip[0].trim() });
  } catch (error) {
    res.send({ IPv4: ip[0].trim() });
  }
});

module.exports = router;
