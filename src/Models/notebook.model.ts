import * as mongoose from 'mongoose';
import Notebook from '../Interfaces/model/notebook.interface';

const notebookSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId,
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
            type: mongoose.Types.ObjectId,
            ref: 'Note',
        },
    ],
    links: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Hyperlink',
        },
    ],
});

const notebookModel = mongoose.model<Notebook & mongoose.Document>('Notebook', notebookSchema);

export default notebookModel;
