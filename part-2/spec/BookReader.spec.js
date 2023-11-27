const path = require('path');
const BookReader = require('../BookReader');

describe('BookReader', () => {
  let bookReader;
  let pathToBooks;

  beforeEach(() => {
    pathToBooks = path.join(__dirname, '../books');
    bookReader = new BookReader(pathToBooks);
  });

  describe('Проверка наличия методов экземпляра класса BookReader', () => {
    it('У экземпляра bookReader присутствует метод filesInFolder', () => {
      expect(bookReader.filesInFolder).toBeDefined();
    });
    it('У экземпляра bookReader присутствует метод booksAndPath', () => {
      expect(bookReader.booksAndPath).toBeDefined();
    });
    it('У экземпляра bookReader присутствует метод readBook', () => {
      expect(bookReader.readBook).toBeDefined();
    });
  });

  describe('Проверка методов экземпляра класса bookReader', () => {
    it('Метод filesInFolder возвращает массив файлов из папки books', async () => {
      const files = await bookReader.filesInFolder();
      expect(files).toEqual(['book1.txt', 'book2.txt', 'book3.txt']);
    });

    it('Метод booksAndPath возвращает объект {имя книги: имя файла с книгой}', async () => {
      const bookAndPatch = await bookReader.booksAndPath();
      expect(bookAndPatch).toEqual({
        'Война и Мир': 'book1.txt',
        'Идиот': 'book2.txt',
        'Двенадцать стульев': 'book3.txt',
      });
    });

    it('Метод readBook принимает название книги, находит её в файлах и возвращает текст', async () => {
      const content1 = await bookReader.readBook('Идиот');
      const content2 = await bookReader.readBook('Война и Мир');
      const regForBook1 = /все назяблись, все лица/gi;
      const regForBook2 = /rien de mieux à faire/gi;
      expect(regForBook1.test(content1)).toBe(true);
      expect(regForBook2.test(content2)).toBe(true);
    });
  });
});
