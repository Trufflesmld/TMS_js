import { mockData } from "./mocks.mjs";

//3 Отсортировать фильмы по рейтингу по убыванию

const sortFilmsByRating = (filmsList) => {
  return filmsList.sort(
    (currentFilmObject, nextFilmObject) =>
      nextFilmObject.imdbRating - currentFilmObject.imdbRating
  );
};

console.log(sortFilmsByRating(mockData));
