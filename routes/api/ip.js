const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  // const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const ip = req.ip;
  const ips = (
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    ""
  ).split(",");
  res.json({ ip, ips: ips[0].trim() });
});

module.exports = router;
