import express from "express";
import path from "path";
// import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./controllers/libs/config";
// entrance
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

//Session

//wiew engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//Routes
app.use("/admin", routerAdmin); //BSSR: EJS
// app.use("/", router); // SPA: REACt

export default app;
