const { RekananAkta } = require("../../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  const rekananAktaData = await RekananAkta.findByPk(id);
  if (!rekananAktaData) {
    return res.status(404).json({
      status: "error",
      message: "rekanan akta not found",
    });
  }

  await rekananAktaData.destroy();
  return res.status(201).json({
    status: "success",
    message: "rekanan data deleted successfully",
  });
};
