exports.main_get = async (req, res, next) => {
  try {
    return res.status(201).json({ message: "Hello World" });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};