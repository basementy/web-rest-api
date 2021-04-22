import express from "express";

import {
  getAnimal,
  getAnimals,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} from "../controllers/animal";

const router = express.Router();

router.get("/", getAnimals);
router.get("/:id", getAnimal);
router.post("/", createAnimal);
router.put("/:id", updateAnimal);
router.delete("/:id", deleteAnimal);

export default router;
