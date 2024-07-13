import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import { Execute } from "./dbConnect/index.mjs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api", async (req, res) => {
  const data = await Execute("SELECT * FROM Demo");
  const queryParams = req.query;
  const bodyData = req.body;
  console.log('Body Data:', bodyData);
  res.send(data);
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.SERVER_PORT}`
  );
});
