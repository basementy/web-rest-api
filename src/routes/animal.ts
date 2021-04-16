import express from "express";

import {
  createAnimal,
  getAnimal,
  getAnimals,
  updateAnimal,
} from "../controllers/animal";

const router = express.Router();

router.get("/", getAnimals);
router.get("/:id", getAnimal);
router.post("/", createAnimal);
router.put("/:id", updateAnimal);

export default router;
