const { Rekanan, RekananSaham } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const { id } = req.params;
  const schema = {
    rekanan_id: "number|empty:false",
    nama_pt: "string|empty:false",
    porsi_saham: "string|optional",
    direksi: "string|optional",
    komisaris: "string|optional",
    keterangan: "string|optional",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(404).json({
      status: "error",
      message: validate,
    });
  }

  const rekananSahamData = await RekananSaham.findByPk(id);
  if (!rekananSahamData) {
    return res.status(404).json({
      status: "error",
      message: "rekanan saham not found",
    });
  }

  const data = {
    rekanan_id: req.body.rekanan_id,
    nama_pt: req.body.nama_pt,
    porsi_saham: req.body.porsi_saham,
    direksi: req.body.direksi,
    komisaris: req.body.komisaris,
    keterangan: req.body.keterangan,
  };

  const rekananData = await Rekanan.findByPk(data.rekanan_id);
  if (!rekananData) {
    return res.status(404).json({
      status: "error",
      message: "rekanan not found",
    });
  }

  await rekananSahamData.update(data);
  return res.status(200).json({
    status: "success",
    message: "rekanan saham updated successfully",
    data: {
      id: rekananSahamData.id,
      rekanan_id: data.rekanan_id,
      nama_pt: data.nama_pt,
      porsi_saham: data.porsi_saham,
      direksi: data.direksi,
      komisaris: data.komisaris,
      keterangan: data.keterangan,
    },
  });
};
