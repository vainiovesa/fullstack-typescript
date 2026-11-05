interface BmiParams {
  height: number;
  weight: number;
}

interface ExerciseParams {
  days: number[];
  target: number;
}

export const parseBmiArguments = (args: string[]): BmiParams => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

export const parseExerciseArguments = (args: string[]): ExerciseParams => {
  if (args.length < 4) throw new Error("Not enough arguments");

  const target: number = Number(args[2]);
  const days: number[] = args.slice(3).map((d) => Number(d));
  if (!isNaN(target) && days.every((value) => !isNaN(value))) {
    return {
      days,
      target,
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

export const sum = (arr: number[]): number => {
  if (arr.length === 0) {
    throw new Error("Can't calculate sum of empty array.");
  }
  return arr.reduce((a, b) => a + b, 0);
};

export const avg = (arr: number[]): number => {
  if (arr.length === 0) {
    throw new Error("Can't calculate average of empty array.");
  }
  return sum(arr) / arr.length;
};
