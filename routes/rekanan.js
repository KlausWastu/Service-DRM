const express = require("express");
const router = express.Router();
const rekananHandler = require("./handler/reknanan");
/* GET users listing. */
router.get("/", rekananHandler.get);
router.post("/", rekananHandler.create);
router.put("/:id", rekananHandler.update);
router.delete("/:id", rekananHandler.destroy);

module.exports = router;
