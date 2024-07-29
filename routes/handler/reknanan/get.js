const { Rekanan } = require("../../../models");

module.exports = async (req, res) => {
  const rekananIds = req.query.rekanan_id || [];

  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 5;

  if (currentPage % 1 !== 0 || perPage % 1 !== 0) {
    return res.status(404).json({
      status: "error",
      message: "page/perPage must be integer",
      data: {},
    });
  }

  if (parseInt(currentPage, 10) <= 0 || parseInt(perPage, 10) <= 0) {
    return res.status(404).json({
      status: "error",
      message: "page/perPage must be greater than 0",
      data: {},
    });
  }

  const limit = parseInt(perPage, 10);
  const offset = (parseInt(currentPage, 10) - 1) * parseInt(perPage, 10);

  const sqlOptions = {
    attributes: [
      "id",
      "email",
      "bentuk_usaha",
      "nama",
      "bidang_usaha",
      "npwp",
      "ktp",
      "no_pkp",
      "alamat",
      "propinsi",
      "kota",
      "telp",
      "hp",
      "kode_pos",
      "cp_nama",
      "cp_email",
      "cp_hp",
      "keterangan",
    ],
    limit,
    offset,
  };

  if (rekananIds.length) {
    sqlOptions.where = {
      id: rekananIds,
    };
  }

  const rekanan = await Rekanan.findAndCountAll(sqlOptions);
  console.log("Rekanan: ", rekanan);
  const totalData = rekanan.count;
  const totalPage = Math.ceil(rekanan.count / perPage);
  let countPerPage = 0;
  if (currentPage < totalPage) {
    countPerPage = perPage;
  } else if (currentPage == totalPage) {
    countPerPage = rekanan.count % perPage;
    if (countPerPage == 0) countPerPage = perPage;
  }

  return res.json({
    status: "success",
    message: "data found",
    data: {
      rekanan: rekanan.rows,
      total_data: totalData,
      current_rows: parseInt(countPerPage, 10),
      per_page: parseInt(perPage, 10),
      current_page: parseInt(currentPage, 10),
      total_page: totalPage,
    },
  });
};
