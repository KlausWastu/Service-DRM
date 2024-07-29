const { RekananPerijinan, Rekanan } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    rekanan_id: "number|empty:false",
    nama_perijinan: "string|empty:false",
    no_perijinan: "string|empty:false",
    masa_berlaku: "date|optional|convert:true",
    kualifikasi: "string|optional",
    klasifikasi: "string|optional",
    file_perijinan: "string|optional",
    keterangan_akta: "string|optional",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(404).json({
      status: "error",
      message: validate,
    });
  }

  const data = {
    rekanan_id: req.body.rekanan_id,
    nama_perijinan: req.body.nama_perijinan,
    no_perijinan: req.body.no_perijinan,
    masa_berlaku: req.body.masa_berlaku,
    kualifikasi: req.body.kualifikasi,
    klasifikasi: req.body.klasifikasi,
    file_perijinan: req.body.file_perijinan,
    keterangan_akta: req.body.keterangan_akta,
  };

  const rekanan = await Rekanan.findByPk(data.rekanan_id);
  if (!rekanan) {
    return res.status(404).json({
      status: "error",
      message: "rekanan not found",
      data: {},
    });
  }

  const rekananPerijinanCreated = await RekananPerijinan.create(data);
  return res.json({
    status: "success",
    message: "rekanan perijinan created successfully",
    data: {
      id: rekananPerijinanCreated.id,
      rekanan_id: data.rekanan_id,
      nama_perijinan: data.nama_perijinan,
      no_perijinan: data.no_perijinan,
      masa_berlaku: rekananPerijinanCreated.masa_berlaku,
      kualifikasi: rekananPerijinanCreated.kualifikasi,
      klasifikasi: rekananPerijinanCreated.klasifikasi,
      file_perijinan: rekananPerijinanCreated.file_perijinan,
      keterangan_akta: rekananPerijinanCreated.keterangan_akta,
      created_at: rekananPerijinanCreated.created_at,
    },
  });
};
