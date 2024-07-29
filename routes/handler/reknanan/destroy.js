const { Rekanan } = require("../../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  const rekanan = await Rekanan.findByPk(id);

  const newObject = { ...rekanan.dataValues };
  console.log("OBJEK BARU:: ", newObject);
  if (!rekanan) {
    return res.status(404).json({
      status: "error",
      message: "rekanan not found",
      data: {},
    });
  }

  await rekanan.destroy();
  return res.json({
    status: "success",
    message: `rekanan "${newObject.nama}" deleted`,
    data: {
      rekanan: {
        id: newObject.id,
        email: newObject.email,
        bentuk_usaha: newObject.bentuk_usaha,
        nama: newObject.nama,
        bidang_usaha: newObject.bidang_usaha,
        npwp: newObject.npwp,
        ktp: newObject.ktp,
        no_pkp: newObject.no_pkp,
        alamat: newObject.alamat,
        propinsi: newObject.propinsi,
        kota: newObject.kota,
        telp: newObject.telp,
        hp: newObject.hp,
        kode_pos: newObject.kode_pos,
        cp_nama: newObject.cp_nama,
        cp_email: newObject.cp_email,
        cp_hp: newObject.cp_hp,
        keterangan: newObject.keterangan,
      },
    },
  });
};
