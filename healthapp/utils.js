export const parseBmiArguments = (args) => {
    if (args.length < 4)
        throw new Error("Not enough arguments");
    if (args.length > 4)
        throw new Error("Too many arguments");
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3]),
        };
    }
    else {
        throw new Error("Provided values were not numbers!");
    }
};
export const parseExerciseArguments = (args) => {
    if (args.length < 4)
        throw new Error("Not enough arguments");
    const target = Number(args[2]);
    const days = args.slice(3).map((d) => Number(d));
    if (!isNaN(target) && days.every((value) => !isNaN(value))) {
        return {
            days,
            target,
        };
    }
    else {
        throw new Error("Provided values were not numbers!");
    }
};
export const sum = (arr) => {
    if (arr.length === 0) {
        throw new Error("Can't calculate sum of empty array.");
    }
    return arr.reduce((a, b) => a + b, 0);
};
export const avg = (arr) => {
    if (arr.length === 0) {
        throw new Error("Can't calculate average of empty array.");
    }
    return sum(arr) / arr.length;
};
