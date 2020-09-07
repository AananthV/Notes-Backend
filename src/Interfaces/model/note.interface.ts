import Section from './section.interface';
import { Document, Types } from 'mongoose';

interface Note extends Document {
    title: string;
    sections: Types.DocumentArray<Section>;
}

export type NoteDocument = Note & Document;
export default Note;
