const fs = require('fs').promises;

class BookReader {
  constructor(pathToBooks) {
    this.pathToBooks = pathToBooks;
  }

  async filesInFolder() {
    try {
      const files = await fs.readdir(this.pathToBooks);
      return files;
    } catch (error) {
      console.error('Error reading files in folder:', error);
      return [];
    }
  }

  async booksAndPath() {
    try {
      const files = await this.filesInFolder();
      const booksAndPath = {};
      files.forEach((file) => {
        const bookName = file.replace('.txt', '');
        booksAndPath[bookName] = file;
      });
      return booksAndPath;
    } catch (error) {
      console.error('Error getting books and paths:', error);
      return {};
    }
  }

  async readBook(bookName) {
    try {
      const booksAndPath = await this.booksAndPath();
      const fileName = booksAndPath[bookName];
      if (!fileName) {
        console.error('Book not found:', bookName);
        return '';
      }

      const filePath = `${this.pathToBooks}/${fileName}`;
      const content = await fs.readFile(filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error('Error reading book:', error);
      return '';
    }
  }
}

module.exports = BookReader;
