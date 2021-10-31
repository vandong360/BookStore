import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

conts express = require("express");
const app = express();
const PORT = process.env.port || 2811;

// app.use(bodyParser.json({ limit: "30mb" }));
// app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
// app.use(cors());

app.get("/taotenla/:name", (req, res) => {
  res.send("Ten cua no la: " + req.params.name);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
