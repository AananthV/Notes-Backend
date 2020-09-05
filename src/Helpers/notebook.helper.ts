import { Types } from 'mongoose';
type ObjectId = Types.ObjectId

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
 * @param {ObjectId} id
 */
export const getNotebook = async (id: ObjectId) => {
    return await notebookModel.findById(id);
};

/**
 * Edit an existing notebook's metadata
 * @param {ObjectId} id
 * @param {{title?: string, description?: string}} meta
 */
export const editNotebookMeta = async (id: ObjectId, meta: { title?: string; description?: string }) => {
    return await notebookModel.update({ _id: id }, { $set: meta });
};

/**
 * Delete an existing notebook
 * @param {ObjectId} id
 */
export const deleteNotebook = async (id: ObjectId) => {
    return await notebookModel.deleteOne({ _id: id });
};
