const express = require("express");
const router = express.Router();
const controller = require("../controller/block.controller")

router.get("/", controller.block_get);
router.get("/:block_num", controller.block_detail_get);

module.exports = router;