const baseURL = 'https://jsonplaceholder.typicode.com/Books';


export const getBooks = async () => {
    try {
        const response = await fetch(`${baseURL}/books`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getBook = async (id: any) => {
    try {
        const response = await fetch(`${baseURL}/books/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const addBook = async (data: any) => {
    try {
        const response = await fetch(`${baseURL}/books`, {
            method: 'Book',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const newBook = await response.json();
        return newBook;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateBook = async (data: any) => {
    try {
        const response = await fetch(`${baseURL}/books`, {
            method: 'Book',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const updateBook = await response.json();
        return updateBook;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteBook = async (id: any) => {
    try {
        await fetch(`${baseURL}/books/${id}`, {
          method: 'DELETE'
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
};