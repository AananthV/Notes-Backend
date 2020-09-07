import * as mongoose from 'mongoose';
import { NoteDocument } from '../Interfaces/model/note.interface';
import SectionSchema from './section.schema';

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        default: 'Untitled',
    },
    sections: [SectionSchema],
});

const noteModel = mongoose.model<NoteDocument>('Note', noteSchema);

export default noteModel;
