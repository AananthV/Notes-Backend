import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb'

import Note from '../Interfaces/model/note.interface';
import SectionSchema from './section.model'

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        default: 'Untitled',
    },
    sections: [SectionSchema]
});

type NoteDocument = Note & mongoose.Document;

const noteModel = mongoose.model<NoteDocument>('Note', noteSchema);

export default noteModel;
