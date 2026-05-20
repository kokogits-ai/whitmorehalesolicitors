import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const distPath = path.join(process.cwd(), "dist");

// Serve static assets from build output
app.use(express.static(distPath));

// Fallback all routes to index.html for React SPA router
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Production server running on port ${PORT}`);
});
