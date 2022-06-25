import { mockData } from "./mocks.mjs";

// 7 Создать функцию, которая бы принимала массив фильмов и
// строку. А результатом этой функции должен быть
// отфильтрованный массив, с фильмами где строка входит в
// название фильма или в его сюжет.

//? Не было указано в задании, но сделал независимо от регистра

const getFilmsByTitleOrPlot = (filmsList, includeString) => {
  return typeof includeString === "string"
    ? filmsList.filter(
        ({ title, plot }) =>
          title.toLowerCase().includes(includeString.toLowerCase()) ||
          plot.toLowerCase().includes(includeString.toLowerCase())
      )
    : null;
};
console.log(getFilmsByTitleOrPlot(mockData, "Skywalker"));
