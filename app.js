const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const rekananRouter = require("./routes/rekanan");
const rekananPerijinanRouter = require("./routes/rekanan-perijinan");
const rekananAktaRouter = require("./routes/rekanan-akta");
const rekananFileRouter = require("./routes/rekanan-file");
const rekananSahamRouter = require("./routes/rekanan-saham");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/rekanan", rekananRouter);
app.use("/rekanan-perijinan", rekananPerijinanRouter);
app.use("/rekanan-akta", rekananAktaRouter);
app.use("/rekanan-file", rekananFileRouter);
app.use("/rekanan-saham", rekananSahamRouter);

module.exports = app;
