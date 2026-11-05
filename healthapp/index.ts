import express from "express";
import { CalculateBmi } from "./bmiCalculator.ts";
import { calculateExercises } from "./exerciseCalculator.ts";
const app = express();

app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const weight: number = Number(req.query.weight);
  const height: number = Number(req.query.height);
  if (isNaN(weight) || isNaN(height)) {
    res.status(400);
    res.json({ error: "malformatted parameters" });
    return;
  }
  try {
    const bmi: string = CalculateBmi(height, weight);
    res.json({ weight, height, bmi });
  } catch (_error) {
    res.status(400);
    res.json({ error: "malformatted parameters" });
  }
});

app.post("/exercises", (req, res) => {
  const { daily_exercises, target } = req.body as {
    daily_exercises: string[];
    target: string;
  };

  if (!daily_exercises || !target) {
    res.status(400);
    res.json({ error: "parameters missing" });
    return;
  }

  try {
    const days: number[] = daily_exercises.map((d) => Number(d));

    if (isNaN(Number(target)) || !days.every((value) => !isNaN(value))) {
      res.status(400);
      res.json({ error: "malformatted parameters" });
      return;
    }

    res.json(calculateExercises(days, Number(target)));
  } catch (_error) {
    res.status(400);
    res.json({ error: "malformatted parameters" });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
