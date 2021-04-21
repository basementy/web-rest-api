import { Animal, EAnimalClass, EAnimalGroup, IAnimal } from "../models/animal";
import { Request, Response } from "express";

export const getAnimals = (req: Request, res: Response) => {
  let animals = Animal;

  const animalClass = req.query?.class;
  const animalGroup = req.query?.group;
  const animalDescription = req.query?.description;

  if (animalClass){
    res.send(animals.filter((animal) => animal.class === animalClass));
  }
  else if (animalGroup){
    res.send(animals.filter((animal) => animal.group === animalGroup));
  }
  else if (animalDescription) {
    res.send(animals.filter((animal) => animal.description.toLowerCase().includes(String(animalDescription))));
  }
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
