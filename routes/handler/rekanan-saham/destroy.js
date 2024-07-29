const { RekananSaham } = require("../../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  const rekananSahamData = await RekananSaham.findByPk(id);
  if (!rekananSahamData) {
    return res.status(404).json({
      status: "error",
      message: "rekanan saham not found",
    });
  }

  await rekananSahamData.destroy();
  return res.status(200).json({
    status: "success",
    message: "rekanan saham deleted successfully",
    data: {},
  });
};
