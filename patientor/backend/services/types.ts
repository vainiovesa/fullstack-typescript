export const GenderOptions = {
  Male: "male",
  Female: "female",
  Other: "other",
} as const;

export type Gender = (typeof GenderOptions)[keyof typeof GenderOptions];

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export type NonSensitivePatient = Omit<Patient, "ssn">;

export type newPatient = Omit<Patient, "id">;
