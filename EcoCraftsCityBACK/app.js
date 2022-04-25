const express = require("express");
const res = require("express/lib/response");
var cors = require("cors");


const adminRoutes = require("./routes/admin")

const app = express();

app.use(express.json())

app.use(cors());

app.use("/admin", adminRoutes)

app.listen(8080);
