const express = require("express");
const router = express.Router();
const rekananSahamHandler = require("./handler/rekanan-saham");
/* GET users listing. */
router.get("/", rekananSahamHandler.get);
router.post("/", rekananSahamHandler.create);
router.put("/:id", rekananSahamHandler.update);
router.delete("/:id", rekananSahamHandler.destroy);

module.exports = router;
