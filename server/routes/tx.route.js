const express = require("express");
const router = express.Router();
const controller = require("../controller/tx.controller")

router.get("/", controller.tx_get);
router.get("/:hash", controller.tx_detail_get)

module.exports = router;