import data from "../data/patients.ts";
import type { Patient, NonSensitivePatient, newPatient } from "./types.ts";
import { v4 as uuidv4 } from "uuid";

const patients: Patient[] = data;

const getPatients = (): Patient[] => {
  return patients;
};

const getNonSensitivePatientData = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (patient: newPatient): Patient => {
  const newPatient = {
    id: uuidv4(),
    ...patient,
  };

  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  getNonSensitivePatientData,
  addPatient,
};
