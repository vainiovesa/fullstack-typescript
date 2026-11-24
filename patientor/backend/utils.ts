import type { newPatient, Gender } from "./types.ts";
import { GenderOptions } from "./types.ts";

const isString = (text: unknown): text is string => {
  return typeof text === "string";
};

const parseText = (text: unknown): string => {
  if (!isString(text)) {
    throw new Error("Incorrect or missing text: " + text);
  }

  return text;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!isString(dateOfBirth) || !isDate(dateOfBirth)) {
    throw new Error("Incorrect or missing date of birth: " + dateOfBirth);
  }
  return dateOfBirth;
};

const isGender = (param: string): param is Gender => {
  return (Object.values(GenderOptions) as string[]).includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect or missing gender: " + gender);
  }
  return gender;
};

const parseNewPatient = (object: unknown): newPatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newPatient: newPatient = {
      name: parseText(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseText(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseText(object.occupation),
    };

    return newPatient;
  }

  throw new Error("Incorrect data: some fields are missing");
};

export default parseNewPatient;
