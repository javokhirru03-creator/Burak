import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./controllers/libs/config";

import session from "express-session";
import ConnnectMongoDB from "connect-mongodb-session";
const MongoDBStore = ConnnectMongoDB(session); //session saqlash uchun MongoDB

const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});
// entrance
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

//Session
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    }, //1 kun
    store: store, //session saqlash uchun
    resave: false, //session har so'rovda yangilanmasin
    saveUninitialized: true, //session boshlanmagan bo'lsa ham saqlansin
  })
);
//wiew engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//Routes
app.use("/admin", routerAdmin); //BSSR: EJS
app.use("/", router); // SPA: REACt

export default app;
