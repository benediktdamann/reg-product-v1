import express from "express";

const app = express();
app.use(express.json());

const {
  GITHUB_TOKEN,
  GITHUB_OWNER,
  GITHUB_REPO,
  PORT = 3001
} = process.env;

if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
  console.error("Missing required environment variables.");
  process.exit(1);
}

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/create-issue", async (req, res) => {
  try {
    const { title, body, labels = [] } = req.body;

    if (!title) {
      return res.status(400).json({ error: "title is required" });
    }

    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues`,
      {
        method: "POST",
        headers: {
          "Accept": "application/vnd.github+json",
          "Authorization": `Bearer ${GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          body: body || "",
          labels
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: "GitHub issue creation failed",
        details: data
      });
    }

    return res.status(201).json({
      ok: true,
      issue_number: data.number,
      issue_url: data.html_url
    });
  } catch (error) {
    return res.status(500).json({
      error: "Unexpected error",
      details: String(error)
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Orchestrator listening on port ${PORT}`);
});
