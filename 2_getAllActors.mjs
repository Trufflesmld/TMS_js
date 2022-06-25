import { mockData } from "./mocks.mjs";

//2 Собрать в массив всех актеров всех фильмов (без повторения)

const getAllActors = (filmsList) => {
  return Array.from(
    new Set(
      filmsList.reduce((result, { actors }) => [...result, ...actors], [])
    )
  );
};
console.log(getAllActors(mockData));
