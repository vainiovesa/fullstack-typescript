import express from "express";
import { CalculateBmi } from "./bmiCalculator.ts";
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const weight: number = Number(req.query.weight);
  const height: number = Number(req.query.height);
  if (isNaN(weight) || isNaN(height)) {
    return res.json({ error: "malformatted parameters" });
  }
  try {
    const bmi: string = CalculateBmi(height, weight);
    res.json({ weight, height, bmi });
  } catch (error) {
    return res.json({ error: "malformatted parameters" });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
