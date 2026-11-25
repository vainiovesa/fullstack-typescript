import { z } from "zod";
import { GenderOptions } from "./services/types.ts";

export const NewPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.iso.date(),
  ssn: z.string(),
  gender: z.enum(GenderOptions),
  occupation: z.string(),
});
