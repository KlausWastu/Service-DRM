const { Rekanan, RekananAkta } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const { id } = req.params;
  const schema = {
    rekanan_id: "number|empty:false",
    no_akta: "string|empty:false",
    tanggal_akta: "date|empty:false|convert:true",
    nama_notaris: "string|empty:false",
    keterangan_akta: "string|optional",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const data = {
    rekanan_id: req.body.rekanan_id,
    no_akta: req.body.no_akta,
    tanggal_akta: req.body.tanggal_akta,
    nama_notaris: req.body.nama_notaris,
    keterangan_akta: req.body.keterangan_akta,
  };

  const rekananAktaData = await RekananAkta.findByPk(id);
  if (!rekananAktaData) {
    return res.status(404).json({
      status: "error",
      message: "rekanan akta not found",
    });
  }

  const rekanan = await Rekanan.findByPk(data.rekanan_id);
  if (!rekanan) {
    return res.status(404).json({
      status: "error",
      message: "rekanan not found",
    });
  }

  await rekananAktaData.update(data);

  return res.status(201).json({
    status: "error",
    message: "rekanan akta updated successfully",
    data: {
      id: rekananAktaData.id,
      rekanan_id: data.rekanan_id,
      no_akta: data.no_akta,
      tanggal_akta: data.tanggal_akta,
      nama_notaris: data.nama_notaris,
      keterangan_akta: data.keterangan_akta,
    },
  });
};
