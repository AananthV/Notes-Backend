import User from '../Interfaces/model/user.interface';
import notebookModel from '../Models/notebook.model';

/**
 * Create a new notebook
 * @param {{owner: User, title: string, description: string}} meta
 */
export const createNotebook = async (meta: { owner: User; title: string; description: string }) => {
    return await notebookModel.create({
        owner: meta.owner,
        title: meta.title,
        description: meta.description,
        notes: [],
        links: [],
    });
};

/**
 * Get an existing notebook
 * @param {string} id
 */
export const getNotebook = async (id: string) => {
    return await notebookModel.findById(id);
};

/**
 * Edit an existing notebook's metadata
 * @param {string} id
 * @param {{title?: string, description?: string}} meta
 */
export const editNotebookMeta = async (id: string, meta: { title?: string; description?: string }) => {
    return await notebookModel.update({ _id: id }, { $set: meta });
};

/**
 * Delete an existing notebook
 * @param {string} id
 */
export const deleteNotebook = async (id: string) => {
    return await notebookModel.deleteOne({ _id: id });
};
