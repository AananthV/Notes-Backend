import * as mongoose from 'mongoose';

import Notebook from '../Interfaces/model/notebook.interface';
import NoteModel from './note.model';
import HyperlinkModel from './hyperlink.model';

const notebookSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        default: 'Untitled',
    },
    description: {
        type: String,
        default: '',
    },
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Note',
        },
    ],
    links: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hyperlink',
        },
    ],
});

type NotebookDocument = Notebook & mongoose.Document;

notebookSchema.post('deleteOne', async (doc: NotebookDocument) => {
    await Promise.all([
        NoteModel.deleteMany({
            _id: { $in: doc.notes },
        }),
        HyperlinkModel.deleteMany({
            _id: { $in: doc.links },
        }),
    ]);
});

const notebookModel = mongoose.model<NotebookDocument>('Notebook', notebookSchema);

export default notebookModel;
