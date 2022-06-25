import { mockData } from "./mocks.mjs";

// 6 Создать функцию, которая бы принимала массив фильмов и
// строку. А результатом этой функции должен быть новый
// отфильтрованный массив, с фильмами, где строка входит в
// название фильма.

//? Не было указано в задании, но сделал независимо от регистра

const getFilmsByTitle = (filmsList, stringTitle) => {
  return typeof stringTitle === "string"
    ? filmsList.filter(({ title }) =>
        title.toLowerCase().includes(stringTitle.toLowerCase())
      )
    : null;
};

console.log(getFilmsByTitle(mockData, "potter"));
