import { mockData } from "./mocks.mjs";

// 5 Создать функцию, которая бы принимала массив фильмов и
// число. А результатом этой функции должен быть
// отфильтрованный массив, с фильмами где число равно году
// выхода фильма.

const filterFilmsByYear = (filmsList, releaseYear) => {
  return typeof releaseYear === "number"
    ? filmsList.filter(({ year }) => year === releaseYear)
    : null;
};

console.log(filterFilmsByYear(mockData, "2001"));
