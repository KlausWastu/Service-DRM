const { RekananAkta, Rekanan } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
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

  const rekanan = await Rekanan.findByPk(data.rekanan_id);
  if (!rekanan) {
    return res.status(404).json({
      status: "error",
      message: "rekanan not found",
    });
  }

  const rekananAktaData = await RekananAkta.create(data);
  return res.json({
    status: "success",
    message: "rekanan akta created successfully",
    data: {
      id: rekananAktaData.id,
      rekanan_id: data.rekanan_id,
      no_akta: data.no_akta,
      tanggal_akta: data.tanggal_akta,
      nama_notaris: data.nama_notaris,
      keterangan_akta: rekananAktaData.keterangan_akta,
    },
  });
};
