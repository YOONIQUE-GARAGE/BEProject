const express = require("express")
const router = express.Router();

const main = require("./main.route");
const block = require("./block.route");
const tx = require("./tx.route");

router.use("/", main);
router.use("/block", block);
router.use("/tx", tx);


module.exports = router;