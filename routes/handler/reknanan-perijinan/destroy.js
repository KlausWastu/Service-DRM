const { RekananPerijinan } = require("../../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  const rekananPerijinanData = await RekananPerijinan.findByPk(id);

  if (!rekananPerijinanData) {
    return res.status(404).json({
      status: "error",
      message: "data not found",
      data: {},
    });
  }

  await rekananPerijinanData.destroy();
  return res.json({
    status: "success",
    message: "rekanan perijinan deleted successfully",
    data: {},
  });
};
