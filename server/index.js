const express = require('express');
const cors = require('cors');
const routes = require("./routes");
const db = require("./models");
require("dotenv").config();


const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});


db.sequelize.sync()

// 개발시에 사용
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("DB연결 성공!!");
// }).catch((err) => {
//     console.error(err);
// })

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 server ${PORT} is running 🚀`);
})