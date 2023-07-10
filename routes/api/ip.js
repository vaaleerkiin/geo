const express = require("express");

const router = express.Router();

router.post("/", async (req, res, next) => {
  console.log(req.body.ip);
  res.send();
});

module.exports = router;
