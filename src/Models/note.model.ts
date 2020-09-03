import * as mongoose from 'mongoose';
import Note from '../Interfaces/model/note.interface';

const noteSchema = new mongoose.Schema({
    sections: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Section',
        },
    ],
});

const noteModel = mongoose.model<Note & mongoose.Document>('Note', noteSchema);

export default noteModel;
