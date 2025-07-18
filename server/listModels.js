require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
  try {
    const models = await genAI.listModels();
    console.log("Available models:");
    models.forEach((model) => console.log(model.name));
  } catch (error) {
    console.error("❌ Failed to list models:", error.message || error);
  }
}

listModels();
