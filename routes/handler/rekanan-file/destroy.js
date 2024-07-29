const { RekananFile } = require("../../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  const rekananFileData = await RekananFile.findByPk(id);
  if (!rekananFileData) {
    return res.status(404).json({
      status: "error",
      message: "rekanan file not found",
    });
  }

  await rekananFileData.destroy();

  return res.status(201).json({
    status: "success",
    message: "rekanan file deleted successfully",
    data: {},
  });
};
