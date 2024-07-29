const { RekananAkta } = require("../../../models");

module.exports = async (req, res) => {
  const rekananAktaIds = req.query.rekanan_akta_ids || [];
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
      "rekanan_id",
      "no_akta",
      "tanggal_akta",
      "nama_notaris",
      "keterangan_akta",
    ],
    limit,
    offset,
  };

  if (rekananAktaIds.length) {
    sqlOptions.where = {
      id: rekananAktaIds,
    };
  }

  const rekananAktaData = await RekananAkta.findAndCountAll(sqlOptions);
  const totalData = rekananAktaData.count;
  const totalPage = Math.ceil(totalData / perPage);
  let countPerPage = 0;
  if (currentPage < totalPage) {
    countPerPage = perPage;
  } else if (currentPage == totalPage) {
    countPerPage = rekananAktaData.count % perPage;
    if (countPerPage == 0) countPerPage = perPage;
  }
  return res.json({
    status: "success",
    message: "data found",
    data: {
      rekanan_akta: rekananAktaData.rows,
      total_data: totalData,
      current_rows: parseInt(countPerPage, 10),
      per_page: parseInt(perPage, 10),
      current_page: parseInt(currentPage, 10),
      total_page: totalPage,
    },
  });
};
