const express = require("express");
const router = express.Router();
const rekananPerijinanHandler = require("./handler/reknanan-perijinan");
/* GET users listing. */
router.get("/", rekananPerijinanHandler.get);
router.post("/", rekananPerijinanHandler.create);
router.put("/:id", rekananPerijinanHandler.update);
router.delete("/:id", rekananPerijinanHandler.destroy);

module.exports = router;
