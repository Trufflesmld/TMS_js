import { mockData } from "./mocks.mjs";

//1 Собрать в массив все жанры фильмов (без повторения)
const getAllGenre = (filmsList) => {
  return Array.from(
    new Set(filmsList.reduce((result, { genre }) => [...result, ...genre], []))
  );
};
console.log(getAllGenre(mockData));
