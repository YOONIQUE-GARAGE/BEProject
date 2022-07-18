const BlockService = require("../services/block.service");
// blockList
exports.block_get = async (req, res, next) => {
  try {
    const blockList = await BlockService.getBlocks();
    if (blockList) {
      return res.status(201).json({ data: blockList, message: "Success" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};
// blockDetail
exports.block_detail_get = async (req, res, next) => {
  const height = req.params.block_num;
  try {
    const blockDetail = await BlockService.getBlockDetail(height);
    if (blockDetail) {
      return res.status(201).json({ data: blockDetail, message: "Success" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};