import { Request, Response } from "express";
import { cloneDeep } from "lodash";

import { Animal, EAnimalClass, EAnimalGroup, IAnimal } from "../models/animal";

export const getAnimals = (
  req: Request<
    {},
    {},
    {},
    {
      class: EAnimalClass;
      group: EAnimalGroup;
      description: string;
    }
  >,
  res: Response
) => {
  let animals = cloneDeep(Animal);

  const animalClass = req.query?.class;
  const animalGroup = req.query?.group;
  const animalDescription = req.query?.description;

  if (animalClass) {
    const filteredAnimalsByClass = animals.filter(
      (animal) => animal.class === animalClass
    );

    animals = filteredAnimalsByClass;
  }

  if (animalGroup) {
    const filteredAnimalsByGroup = animals.filter(
      (animal) => animal.group === animalGroup
    );

    animals = filteredAnimalsByGroup;
  }

  if (animalDescription) {
    const filteredAnimalsByDescription = animals.filter((animal) =>
      animal.description.toLowerCase().includes(String(animalDescription))
    );

    animals = filteredAnimalsByDescription;
  }

  res.send(animals);
};

export const getAnimal = (req: Request<{ id: string }>, res: Response) => {
  const animalId = Number(req.params.id);
  const filteredAnimal = Animal.find(({ id }) => id === animalId);

  if (filteredAnimal) {
    res.send(filteredAnimal);
  } else {
    res.status(404);
    res.json({
      message: "Informe um ID existente",
    });
  }
};

export const createAnimal = (
  req: Request<{}, {}, Omit<IAnimal, "id">>,
  res: Response
) => {
  const animal: IAnimal = {
    id: Animal[Animal.length - 1].id + 1,
    description: req.body.description,
    group: req.body.group,
    class: req.body.class,
  };

  Animal.push(animal);

  res.status(201);
  res.send(animal);
};

export const updateAnimal = (req: Request<{ id: string }>, res: Response) => {
  const newAnimalData = req.body as IAnimal;
  const animalId = Number(req.params.id);
  const filteredAnimalIndex = Animal.findIndex(({ id }) => id === animalId);

  Animal[filteredAnimalIndex] = newAnimalData;

  res.send(Animal[filteredAnimalIndex]);
};

export const deleteAnimal = (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  const deletedAnimalIndex = Animal.findIndex(
    (animal) => animal?.id === Number(id)
  );

  console.log(deletedAnimalIndex);

  if (deletedAnimalIndex !== -1) {
    Animal.splice(deletedAnimalIndex, 1);

    res.status(202);
    res.send(Animal);
  } else {
    res.status(404);
    res.json({
      message: "Informe um ID existente",
    });
  }
};
