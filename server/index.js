import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/api", (_, res) => {
  res.send({
    message: "Hello World",
    time: new Date().toISOString(),
  });
});

const startServer = () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
