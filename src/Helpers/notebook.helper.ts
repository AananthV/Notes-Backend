import { Types } from 'mongoose';
type ObjectId = Types.ObjectId

import User from '../Interfaces/model/user.interface';
import NotebookMeta from '../Interfaces/helper/notebookMeta.interface'
import NotebookModel from '../Models/notebook.model';

/**
 * Create a new notebook
 * @param {User} owner
 * @param {{title?: string, description?: string}} meta
 */
export const createNotebook = async (owner: User, meta: NotebookMeta) => {
    let notebook = new NotebookModel({ ...meta, owner: owner, notes: [], links: [] });
    return await NotebookModel.create(notebook);
};

/**
 * Get an existing notebook
 * @param {ObjectId} id
 */
export const getNotebook = async (id: ObjectId) => {
    return await NotebookModel.findById(id);
};

/**
 * Edit an existing notebook's metadata
 * @param {ObjectId} id
 * @param {{title?: string, description?: string}} meta
 */
export const editNotebookMeta = async (id: ObjectId, meta: NotebookMeta) => {
    return await NotebookModel.update({ _id: id }, { $set: meta });
};

/**
 * Delete an existing notebook
 * @param {ObjectId} id
 */
export const deleteNotebook = async (id: ObjectId) => {
    return await NotebookModel.deleteOne({ _id: id });
};
