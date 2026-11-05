import { parseExerciseArguments, avg } from "./utils.ts";

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

type Rating = 1 | 2 | 3;

export const calculateExercises = (days: number[], target: number): Result => {
  const periodLength: number = days.length;
  const trainingDays: number = days.filter((d) => d !== 0).length;
  const average = avg(days);
  const success: boolean = average >= target;

  let rating: Rating = 1;
  let ratingDescription: string = "bad";
  if (average > target - 0.5) {
    rating = 2;
    ratingDescription = "not too bad but could be better";
  }
  if (success) {
    rating = 3;
    ratingDescription = "very good";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

if (process.argv[1] === import.meta.filename) {
  try {
    const { days, target } = parseExerciseArguments(process.argv);
    console.log(calculateExercises(days, target));
  } catch (error: unknown) {
    let errorMessage = "Something bad happened.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    console.log(errorMessage);
  }
}
