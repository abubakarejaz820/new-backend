import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import orderHandler from "./api/order.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.all("/api/order", orderHandler); // GET & POST

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
