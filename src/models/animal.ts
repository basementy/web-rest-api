export enum EAnimalGroup {
  TERRESTRE = "terrestre",
  AQUATICO = "aquatico",
  AEREO = "aereo",
}

export enum EAnimalClass {
  MAMIFERO = "mamifero",
  REPTIL = "reptil",
  PEIXE = "peixe",
  ANFIBIO = "anfibio",
  AVES = "aves",
}

export interface IAnimal {
  id: number;
  description: string;
  group: EAnimalGroup;
  class: EAnimalClass;
}

export const Animal: IAnimal[] = [
  {
    id: 1,
    description: "Porco",
    group: EAnimalGroup.TERRESTRE,
    class: EAnimalClass.MAMIFERO,
  },
  {
    id: 2,
    description: "Vaca",
    group: EAnimalGroup.TERRESTRE,
    class: EAnimalClass.MAMIFERO,
  },
  {
    id: 3,
    description: "Cachorro",
    group: EAnimalGroup.TERRESTRE,
    class: EAnimalClass.MAMIFERO,
  },
  {
    id: 4,
    description: "Gato",
    group: EAnimalGroup.TERRESTRE,
    class: EAnimalClass.MAMIFERO,
  },
];
