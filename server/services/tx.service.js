const models = require("../models")

// getTxList
const getTxs = async () => {
  try {
    let txList;
    txList = await models.tx.findAll();
    return txList ? txList : {}
  } catch (e) {
    throw Error(e);
  }
};
// getTxDetail
const getTxDetail = async (tx_hash) => {
  try {
    const txDetail = await models.tx.findOne({
      where: { tx_hash }
    })
    return txDetail ? txDetail : {}
  } catch (e) {
    throw Error(e);
  }
}

module.exports = {
  getTxs,
  getTxDetail
}