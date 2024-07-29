const { Rekanan } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const { id } = req.params;
  const schema = {
    email: "string|empty:false",
    bentuk_usaha: "string|empty:false",
    nama: "string|empty:false",
    bidang_usaha: "string|empty:false",
    npwp: "string|empty:false",
    ktp: "string|optional",
    no_pkp: "string|optional",
    alamat: "string|optional",
    propinsi: "string|optional",
    kota: "string|optional",
    telp: "string|optional",
    hp: "string|optional",
    kode_pos: "string|optional",
    cp_nama: "string|optional",
    cp_email: "string|optional",
    cp_hp: "string|optional",
    keterangan: "string|optional",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(404).json({
      status: "error",
      message: validate,
    });
  }

  const data = {
    email: req.body.email,
    bentuk_usaha: req.body.bentuk_usaha,
    nama: req.body.nama,
    bidang_usaha: req.body.bidang_usaha,
    npwp: req.body.npwp,
    ktp: req.body.ktp,
    no_pkp: req.body.no_pkp,
    alamat: req.body.alamat,
    propinsi: req.body.propinsi,
    kota: req.body.kota,
    telp: req.body.telp,
    hp: req.body.hp,
    kode_pos: req.body.kode_pos,
    cp_nama: req.body.cp_nama,
    cp_email: req.body.cp_email,
    cp_hp: req.body.cp_hp,
    keterangan: req.body.keterangan,
  };

  const rekananData = await Rekanan.findByPk(id);
  if (!rekananData) {
    return res.status(404).json({
      status: "error",
      message: "data not found",
      data: [],
    });
  }

  await rekananData.update(data);
  return res.json({
    status: "success",
    message: "rekanan update successfully",
    data: {
      rekanan: {
        id: rekananData.id,
        email: data.email,
        bentuk_usaha: data.bentuk_usaha,
        nama: data.nama,
        bidang_usaha: data.bidang_usaha,
        npwp: data.npwp,
        ktp: rekananData.ktp,
        no_pkp: rekananData.no_pkp,
        alamat: rekananData.alamat,
        propinsi: rekananData.propinsi,
        kota: rekananData.kota,
        telp: rekananData.telp,
        hp: rekananData.hp,
        kode_pos: rekananData.kode_pos,
        cp_nama: rekananData.cp_nama,
        cp_email: rekananData.cp_email,
        cp_hp: rekananData.cp_hp,
        keterangan: rekananData.keterangan,
      },
    },
  });
};
