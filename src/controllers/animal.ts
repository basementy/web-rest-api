import { Animal, IAnimal } from "../models/animal";
import { Request, Response } from "express";

export const getAnimals = (req: Request, res: Response) => {
  res.send(Animal);
};

export const getAnimal = (req: Request<{ id: string }>, res: Response) => {
  const animalId = Number(req.params.id);
  const filteredAnimal = Animal.find(({ id }) => id === animalId);

  res.send(filteredAnimal);
};

export const createAnimal = (req: Request, res: Response) => {
  const animal = req.body as IAnimal;

  Animal.push(animal);

  res.send(animal).status(201);
};

export const updateAnimal = (req: Request<{ id: string }>, res: Response) => {
  const newAnimalData = req.body as IAnimal;
  const animalId = Number(req.params.id);
  const filteredAnimalIndex = Animal.findIndex(({ id }) => id === animalId);

  Animal[filteredAnimalIndex] = newAnimalData;

  res.send(newAnimalData);
};
