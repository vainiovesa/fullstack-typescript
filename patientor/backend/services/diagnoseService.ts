import data from "../data/diagnoses.ts";
import type { Diagnosis } from "../types.ts";

const diagnoses: Diagnosis[] = data;

const getDiagnoses = (): Diagnosis[] => {
  return diagnoses;
};

export default {
  getDiagnoses,
};
