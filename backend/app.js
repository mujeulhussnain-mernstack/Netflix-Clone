import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
dotenv.config({});
const app = express();

// Importing user routes
import userRoutes from "./routes/user.route.js";

const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "https://netflix-clone-bkhd.onrender.com", credentials: true }));

app.use("/api/v1/user", userRoutes)

import dbConnection from "./utils/dbConnection.js";

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get(/.*/, (_, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
const PORT = process.env.PORT || 4040;
app.listen(PORT, async () => {
  await dbConnection();
  console.log(`Server is running at http://localhost:${PORT}`);
});
