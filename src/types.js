type Author = {
  name: string,
  slug: string,
};

export type Book = {
  authors: Array<Author>,
  document: string,
  id: string,
  image: string,
  largeImage: string,
  mediumImage: string,
  shortTitle: string,
  slug: string,
  title: string,
};

type Module = { type: string, books?: Array<Book> };

export type Response = {
  id: string,
  modules: Array<Module>,
  slug: string,
  title: string,
};
