const express = require('express');
const userRouter = require("./user");
// import accountRoute from ("./account");
const accountRoute = require("./account");
// export const mainRouter = express.Router();

const router = express.Router();
router.use("/user" , userRouter);
router.use("/account" , accountRoute);
module.exports = router;