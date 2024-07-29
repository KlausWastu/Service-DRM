const { Rekanan } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
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

  const createdRekanan = await Rekanan.create(data);

  return res.json({
    status: "success",
    message: "rekanan created successfully",
    data: {
      id: createdRekanan.id,
      email: req.body.email,
      bentuk_usaha: req.body.bentuk_usaha,
      nama: req.body.nama,
      bidang_usaha: req.body.bidang_usaha,
      npwp: req.body.npwp,
      ktp: createdRekanan.ktp,
      no_pkp: createdRekanan.no_pkp,
      alamat: createdRekanan.alamat,
      propinsi: createdRekanan.propinsi,
      kota: createdRekanan.kota,
      telp: createdRekanan.telp,
      hp: createdRekanan.hp,
      kode_pos: createdRekanan.kode_pos,
      cp_nama: createdRekanan.cp_nama,
      cp_email: createdRekanan.cp_email,
      cp_hp: createdRekanan.cp_hp,
      keterangan: createdRekanan.keterangan,
    },
  });
};
