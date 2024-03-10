import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import subRouter from "./subRoute/subRoutes.js";


const app = express();
const port = 3000;
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/departments',subRouter);

app.listen(port, () => {
    console.log(`Successfully started server on port ${port}.`);
  });