import express from "express";
import {router as adminRouter} from "./admin.ts";
import {router as authRouter} from "./auth.ts";
import cookieParser from "cookie-parser";
import {router as webRouter} from "./web.ts";

var app = express();
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/web", webRouter);

app.listen(7045, () => {
    console.log("Server started on port 7045");
});