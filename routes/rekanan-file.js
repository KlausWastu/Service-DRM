const express = require("express");
const router = express.Router();
const rekananFileHandler = require("./handler/rekanan-file");
/* GET users listing. */
router.get("/", rekananFileHandler.get);
router.post("/", rekananFileHandler.create);
router.put("/:id", rekananFileHandler.update);
router.delete("/:id", rekananFileHandler.destroy);

module.exports = router;
