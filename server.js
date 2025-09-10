import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import orderHandler from "./api/order.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "https://abubakar-arts.netlify.app", // frontend URL
  methods: ["GET", "POST"]
}));
app.use(bodyParser.json());

// Routes
app.all("/api/order", orderHandler); // GET & POST

// Optional root route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
