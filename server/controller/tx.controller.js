const TxService = require("../services/tx.service")

// txList
exports.tx_get = async (req, res, next) => {
  try {
    const txList = await TxService.getTxs();
    if (txList) {
      return res.status(201).json({ data: txList, message: "Success" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};
// txDetail
exports.tx_detail_get = async (req, res, next) => {
  const tx_hash = req.params.hash;
  try {
    const txDetail = await TxService.getTxDetail(tx_hash);
    if (txDetail) {
      return res.status(201).json({ data: txDetail, message: "Success" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};