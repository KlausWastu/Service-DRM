const express = require("express");
const router = express.Router();
const rekananAktaHandler = require("./handler/rekanan-akta");
/* GET users listing. */
router.get("/", rekananAktaHandler.get);
router.post("/", rekananAktaHandler.create);
router.put("/:id", rekananAktaHandler.update);
router.delete("/:id", rekananAktaHandler.destroy);

module.exports = router;
