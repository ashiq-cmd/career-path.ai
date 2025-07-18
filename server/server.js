const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Career Path Backend is running 🚀");
});


const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

app.post("/generate-career-path", async (req, res) => {
  const { interests } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        {
          role: "user",
          content: `Suggest a detailed career path (with roadmap, skills, resources, and 2 project ideas) for someone whose interests are: ${interests}`,
        },
      ],
      max_tokens: 1000,
    });

    res.json({ careerPath: completion.choices[0].message.content });
  } catch (err) {
    console.error("❌ OpenRouter error:", err.message || err);
    res.status(500).json({ error: "Failed to generate career path" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
