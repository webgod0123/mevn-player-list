import bodyParser from "body-parser";
import compression from "compression";
import express, { Request, Response, NextFunction, Application } from "express";
import router from "./routes";
import cors from "cors";

const app: Application = express();

router.get("/", (req: Request, res: Response) => {
  res.send("Player API");
});

app.use(cors({ origin: "*" }));
app.use(compression());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "access-control-allow-headers": "*",
  });

  next();
});

export default app;
