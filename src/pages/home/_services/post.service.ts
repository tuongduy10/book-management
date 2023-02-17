import { addPost, deletePost, getPost, getPosts, updatePost } from "@/api/post.api";

export const getAllPosts = async () => {
    try {
        const data = await getPosts();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getPostById = async (id: any) => {
    try {
        const data = await getPost(id);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const createSinglePost = async (data: any) => {
    try {
        const { data: newPost } = await addPost(data);
        return newPost;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateSinglePost = async (data: any) => {
    try {
        const { data: updatedPost } = await updatePost(data);
        return updatedPost;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteSinglePost = async (id: any) => {
    try {
      await deletePost(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };