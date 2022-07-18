const models = require("../models")

// getBlockList
const getBlocks = async () => {
  try {
    let blockList;
    blockList = await models.block.findAll();
    return blockList ? blockList : {}
  } catch (e) {
    throw Error(e);
  }
};

// getBlockDetail
const getBlockDetail = async (height) => {
  try {
    const blockDetail = await models.block.findOne({
      where: { height }
    })
    return blockDetail ? blockDetail : {}
  } catch (e) {
    throw Error(e);
  }
};

module.exports = {
  getBlocks,
  getBlockDetail
}