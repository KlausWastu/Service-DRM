const { RekananSaham } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const rekananSahamIds = req.query.rekanan_saham_id || [];

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
      "nama_pt",
      "porsi_saham",
      "direksi",
      "komisaris",
      "keterangan",
    ],
    limit,
    offset,
  };

  if (rekananSahamIds.length) {
    sqlOptions.where = {
      id: rekananSahamIds,
    };
  }

  const rekananSaham = await RekananSaham.findAndCountAll(sqlOptions);
  console.log("Rekanan Saham: ", rekananSaham);
  const totalData = rekananSaham.count;
  const totalPage = Math.ceil(rekananSaham.count / perPage);
  let countPerPage = 0;
  if (currentPage < totalPage) {
    countPerPage = perPage;
  } else if (currentPage == totalPage) {
    countPerPage = rekananSaham.count % perPage;
    if (countPerPage == 0) countPerPage = perPage;
  }

  return res.json({
    status: "success",
    message: "data found",
    data: {
      rekanan_saham: rekananSaham.rows,
      total_data: totalData,
      current_rows: parseInt(countPerPage, 10),
      per_page: parseInt(perPage, 10),
      current_page: parseInt(currentPage, 10),
      total_page: totalPage,
    },
  });
};
