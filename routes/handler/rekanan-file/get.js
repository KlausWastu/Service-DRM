const { RekananFile } = require("../../../models");

module.exports = async (req, res) => {
  const rekananFileIds = req.query.rekanan_file_id || [];
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
    attributes: ["id", "rekanan_id", "file", "keterangan_file"],
    limit,
    offset,
  };

  if (rekananFileIds.length) {
    sqlOptions.where = {
      id: rekananFileIds,
    };
  }

  const rekananFileData = await RekananFile.findAndCountAll(sqlOptions);
  const totalData = rekananFileData.count;
  const totalPage = Math.ceil(totalData / perPage);
  let countPerPage = 0;
  if (currentPage < totalPage) {
    countPerPage = perPage;
  } else if (currentPage == totalPage) {
    countPerPage = rekananFileData.count % perPage;
    if (countPerPage == 0) countPerPage = perPage;
  }

  return res.status(201).json({
    status: "success",
    message: "data found",
    data: {
      rekanan_file: rekananFileData.rows,
      total_data: totalData,
      current_rows: parseInt(countPerPage, 10),
      per_page: parseInt(perPage, 10),
      current_page: parseInt(currentPage, 10),
      total_page: totalPage,
    },
  });
};
