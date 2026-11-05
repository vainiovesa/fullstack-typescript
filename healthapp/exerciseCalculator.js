import { parseExerciseArguments, avg } from "./utils.ts";
const calculateExercises = (days, target) => {
    const periodLength = days.length;
    const trainingDays = days.filter((d) => d !== 0).length;
    const average = avg(days);
    const success = average >= target;
    let rating = 1;
    let ratingDescription = "could be better";
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
try {
    const { days, target } = parseExerciseArguments(process.argv);
    console.log(calculateExercises(days, target));
}
catch (error) {
    let errorMessage = "Something bad happened.";
    if (error instanceof Error) {
        errorMessage += " Error: " + error.message;
    }
    console.log(errorMessage);
}
