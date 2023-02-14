const baseURL = 'https://jsonplaceholder.typicode.com';


export const getPosts = async () => {
    try {
        const response = await fetch(`${baseURL}/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getPost = async (id: any) => {
    try {
        const response = await fetch(`${baseURL}/posts/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const addPost = async (data: any) => {
    try {
        const response = await fetch(`${baseURL}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const newPost = await response.json();
        return newPost;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updatePost = async (data: any) => {
    try {
        const response = await fetch(`${baseURL}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const updatePost = await response.json();
        return updatePost;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deletePost = async (id: any) => {
    try {
        await fetch(`${baseURL}/posts/${id}`, {
          method: 'DELETE'
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
};