import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { initializePassport } from "./config/passport.js";
import { handlerErrorsMiddleware } from "./middlewares/handlerErrorsMiddleware.js";
import {
  database,
  routerSessions,
  routerUsers,
  routerPosts,
  routerComments,
} from "./modulespaths.js";
import { getUserFromTokenMiddleware } from "./middlewares/getLoggedUser.js";
export const app = express();


/*IDIOMA AZTECA*/

//Middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SIGN || "lupe"));

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);


app.use(getUserFromTokenMiddleware); //En cada solicitud verifica la existencia de token y nos provee de req.currentUser.

//routes
app.use("/api", routerSessions);
app.use("/api", routerUsers);
app.use("/api", routerComments);
app.use("/api", routerPosts);

initializePassport();

app.use(handlerErrorsMiddleware);

app.get("/", async (req, res, next) => {
  const [result] = await database.query("SELECT * FROM users");
  console.log(result);
  res.send(result);
});
