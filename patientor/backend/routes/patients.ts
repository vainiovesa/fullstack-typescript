import express, { type Request } from "express";
import { z } from "zod";
import patientService from "../services/patientService.ts";
import { errorMiddleware, newPatientParser } from "../middleware.ts";
import { type newPatient } from "../services/types.ts";

const router = express.Router();

router.get("/", (_req, res) => {
  const data = patientService.getNonSensitivePatientData();
  res.send(data);
});

router.post(
  "/",
  newPatientParser,
  (req: Request<unknown, unknown, newPatient>, res) => {
    try {
      const addedPatient = patientService.addPatient(req.body);
      res.json(addedPatient);
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        res.status(400).send({ error: error.issues });
      } else {
        res.status(400).send({ error: "unknown error" });
      }
    }
  },
);

router.use(errorMiddleware);

export default router;
