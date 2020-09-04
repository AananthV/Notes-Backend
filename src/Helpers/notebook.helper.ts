import * as mongoose from 'mongoose';

import User from '../Interfaces/model/user.interface';
import notebookModel from '../Models/notebook.model';

/**
 * Create a new notebook
 * @param {User} owner
 * @param {{title?: string, description?: string}} meta
 */
export const createNotebook = async (owner: User, meta: { title?: string; description?: string }) => {
    let notebook = new notebookModel({ ...meta, owner: owner });
    return await notebookModel.create(notebook);
};

/**
 * Get an existing notebook
 * @param {mongoose.Types.ObjectId} id
 */
export const getNotebook = async (id: mongoose.Types.ObjectId) => {
    return await notebookModel.findById(id);
};

/**
 * Edit an existing notebook's metadata
 * @param {mongoose.Types.ObjectId} id
 * @param {{title?: string, description?: string}} meta
 */
export const editNotebookMeta = async (id: mongoose.Types.ObjectId, meta: { title?: string; description?: string }) => {
    return await notebookModel.update({ _id: id }, { $set: meta });
};

/**
 * Delete an existing notebook
 * @param {mongoose.Types.ObjectId} id
 */
export const deleteNotebook = async (id: mongoose.Types.ObjectId) => {
    return await notebookModel.deleteOne({ _id: id });
};
