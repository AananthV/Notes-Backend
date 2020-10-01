import { Types } from 'mongoose';

import HyperlinkModel from '../Models/hyperlink.model';
import NoteModel from '../Models/note.model';
import NotebookModel from '../Models/notebook.model';

import NoteMeta from '../Interfaces/helper/noteMeta.interface';

/**
 * Add a new Note.
 * @param  {ObjectId} notebookId
 * @param  {{title?:string}} meta
 */
export const createNote = async (notebookId: Types.ObjectId, meta: NoteMeta) => {
    const createdNote = await NoteModel.create({
        title: meta.title ? meta.title : 'Untitled Note',
        sections: [],
    });
    await NotebookModel.updateOne({ _id: notebookId }, { $push: { notes: createdNote } });
    return createNote;
};

/**
 * Get a note from the database
 * @param  {Types.ObjectId} noteId
 * @param  {boolean=false} populate
 */
export const getNote = async (noteId: Types.ObjectId) => {
    const note = await NoteModel.findById(noteId);
    if (note === null) throw new Error('Note not found.');

    return note;
};

/**
 * Edit the note metadata
 * @param  {Types.ObjectId} noteId
 * @param  {NoteMeta} meta
 */
export const editNoteMeta = async (noteId: Types.ObjectId, meta: NoteMeta) => {
    const res = await NoteModel.updateOne({ _id: noteId }, { $set: { title: meta.title ? meta.title : 'Untitled' } });

    if (res.n === 0) throw new Error('Note not found.');

    return true;
};

/**
 * Delete a Note
 * @param  {Types.ObjectId} noteId
 */
export const deleteNote = async (noteId: Types.ObjectId) => {
    // Delete note
    const res = await NoteModel.deleteOne({ _id: noteId });

    if (res.deletedCount === 0) throw new Error('Note not found.');

    // Delete associated hyperlinks
    await HyperlinkModel.deleteMany({ note: noteId });

    return true;
};

/**
 * Rearrange sections in a note
 * @param  {Types.ObjectId} noteId
 * @param  {number} index1
 * @param  {number} index2
 */
export const swapSectionssInNote = async (noteId: Types.ObjectId, index1: number, index2: number) => {
    const note = await getNote(noteId);

    if (index1 < 0 || index1 >= note.sections.length || index2 < 0 || index2 >= note.sections.length)
        throw new Error('Index out of bounds');

    [note.sections[index1], note.sections[index2]] = [note.sections[index2], note.sections[index1]];
    return await note.save();
};
