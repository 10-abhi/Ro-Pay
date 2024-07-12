const express = require("express");
//cors
const cors = require('cors');
const  mainRouter  = require("./routes/index");

const app = express();
app.use(cors());
//body-parser
app.use(express.json());
//mainrouter

app.use("/api/v1" , mainRouter);

app.listen(3000);
