import { Router } from "express";
import { getPeople, savePerson } from "../controllers/people.controllers.js";
import { validateSchema } from "../middleware/validate.middleware.js";
import { personSchema } from "../schemas/people.schema.js";

const router = Router();

router.get("/people", getPeople);
router.post("/people", validateSchema(personSchema), savePerson);

export default router;
