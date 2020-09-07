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
    return await NotebookModel.create({   
            title: meta.title ? meta.title : "Untitled Notebook",
            description: meta.description ? meta.description : "", 
            owner: owner, 
            notes: [], 
            links: [] 
    });
};

/**
 * Get an existing notebook. Seting populate to true will populate the titles of the notes.
 * @param {ObjectId} id
 * @param {boolean} populate
 */
export const getNotebook = async (id: ObjectId, populate: boolean = true) => {
    const notebook = await NotebookModel.findById(id);
    
    if (notebook === null) throw new Error('Notebook not found.');

    if (populate) await notebook.populate('notes', 'title').execPopulate()

    return notebook;
};

/**
 * Edit an existing notebook's metadata
 * @param {ObjectId} id
 * @param {NotebookMeta} meta
 */
export const editNotebookMeta = async (id: ObjectId, meta: NotebookMeta) => {
    const res = await NotebookModel.update({ _id: id }, { $set: meta });

    if (res.n === 0) throw new Error('Notebook not found.')

    return true
};

/**
 * Delete an existing notebook
 * @param {ObjectId} id
 */
export const deleteNotebook = async (id: ObjectId) => {
    const res = await NotebookModel.deleteOne({ _id: id });

    if (res.deletedCount === 0) throw new Error('Note not found.');

    return true;
};
