import { parseBmiArguments } from "./utils.ts";

const CalculateBmi = (height: number, weight: number): string => {
  if (height === 0) {
    throw new Error("Can't divide by zero.");
  }
  const bmi = weight / (height / 100) ** 2;
  if (bmi > 30) {
    return "Obese";
  }
  if (bmi > 25) {
    return "Overweight";
  }
  return "Normal range";
};

try {
  const { height, weight } = parseBmiArguments(process.argv);
  console.log(CalculateBmi(height, weight));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
