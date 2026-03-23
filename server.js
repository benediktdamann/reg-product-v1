import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const { PORT = 3000, TARGET_URL } = process.env;

app.get("/health", (_req, res) => {
  res.json({ ok: true, targetConfigured: Boolean(TARGET_URL) });
});

app.use("/api/*", async (req, res) => {
  if (!TARGET_URL) {
    return res.status(500).json({ error: "TARGET_URL is not configured" });
  }

  const base = TARGET_URL.replace(/\/+$/, "");
  const suffix = req.params[0] ? `/${req.params[0]}` : "";
  const query = req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
  const forwardUrl = `${base}${suffix}${query}`;

  try {
    const headers = { ...req.headers };
    delete headers.host;

    const method = req.method.toUpperCase();
    const hasBody = !["GET", "HEAD"].includes(method);

    const response = await fetch(forwardUrl, {
      method,
      headers,
      body: hasBody ? JSON.stringify(req.body ?? {}) : undefined
    });

    const responseBody = await response.text();

    res.status(response.status);
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() === "transfer-encoding") return;
      res.setHeader(key, value);
    });

    return res.send(responseBody);
  } catch (error) {
    return res.status(502).json({
      error: "Proxy request failed",
      details: String(error)
    });
  }
});

app.listen(PORT, () => {
  console.log(`Render bridge listening on port ${PORT}`);
});
