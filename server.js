import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Derive __dirname in ES Modules layout
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const distPath = path.join(process.cwd(), "dist");

// Serve static assets from our Vite production build folder
app.use(express.static(distPath));

// Support SPA client-side routing fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Railway production server running on port ${PORT}`);
});
