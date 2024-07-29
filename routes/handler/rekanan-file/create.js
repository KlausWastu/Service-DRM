const { Rekanan, RekananFile } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    rekanan_id: "number|empty:false",
    file: "string|empty:false",
    keterangan_file: "string|optional",
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
    file: req.body.file,
    keterangan_file: req.body.keterangan_file,
  };

  const rekanan = await Rekanan.findByPk(data.rekanan_id);
  if (!rekanan) {
    return res.status(404).json({
      status: "error",
      message: "rekanan not found",
    });
  }

  const rekananFile = await RekananFile.create(data);

  return res.status(201).json({
    status: "success",
    message: "rekanan file created successfully",
    data: {
      id: rekananFile.id,
      rekanan_id: data.rekanan_id,
      file: data.file,
      keterangan_file: data.keterangan_file,
    },
  });
};
