import { mockData } from "./mocks.mjs";

// 4 Создать новый массив, где объекты фильмов будут состоять
// из следующих полей:
// id, title, released, plot

const getModifiedFilmsList = (filmsList) => {
  return filmsList.map(({ id, title, released, plot }) => ({
    id,
    title,
    released,
    plot,
  }));
};
console.log(getModifiedFilmsList(mockData));

//? Вопрос: у одного фильма нет id его надо подставлять исходя из
//? данных которые есть в объекте или у каждого должен быть id в любом случае
// если придерживаться логики в вопросе, то ещё одна версия

const getModifiedFilmsListV2 = (filmsList) => {
  return filmsList.map(({ id, title, released, plot }, index) => ({
    id: id || index + 1,
    title,
    released,
    plot,
  }));
};
console.log(getModifiedFilmsListV2(mockData));
