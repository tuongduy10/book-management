import { addBook, deleteBook, getBook, getBooks, updateBook } from "@/api/book.api";

const baseURL = 'https://jsonplaceholder.typicode.com/Books';


export const getAllBooks = async () => {
    try {
        const { data } = await getBooks();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getBookById = async (id: any) => {
    try {
        const { data } = await getBook(id);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const createSingleBook = async (data: any) => {
    try {
        const { data: newBook } = await addBook(data);
        return newBook;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateSingleBook = async (data: any) => {
    try {
        const { data: updatedBook } = await updateBook(data);
        return updatedBook;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteSingleBook = async (id: any) => {
    try {
      await deleteBook(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };