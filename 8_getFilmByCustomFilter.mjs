import { mockData } from "./mocks.mjs";

// 8 Создать функцию, которая бы принимала 3 параметра:
// 1)массив фильмов , 2) строка(название поля, например 'title') и
// строку/число(значение поля "Black Widow"). А результатом
// этой функции должен быть отфильтрованный массив, где
// параметры 2 и 3 равны в объекте фильма. Например:
// передаем (films, 'title', 'Black Widow') и на выходе получаем
// фильм с id=1 если передаем (films, 'year', 2011) , то получаем
// фильм с id=2

const getFilmByCustomFilter = (filmsList, key, value) => {
  if (Array.isArray(filmsList[0][key])) {
    return filmsList.filter((film) =>
      film[key].join().toLowerCase().includes(value.toLowerCase())
    );
  } else if (typeof filmsList[0][key] === typeof value) {
    return filmsList.filter((film) => film[key] === value);
  } else return null;
};
console.log(getFilmByCustomFilter(mockData, "actors", "Radcliffe"));
