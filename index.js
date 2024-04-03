import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./src/routes/user.js";
import { productRouter } from "./src/routes/product.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the E-Commerce API");
});

app.use("/user", userRouter);
app.use("/product", productRouter);

mongoose.connect(
  "mongodb+srv://anuragsurya100:3huC6haEccpmJsOD@cluster0.epazexe.mongodb.net/project2"
);

app.listen(3000, () => {
  console.log("SERVER STARTED");
});
