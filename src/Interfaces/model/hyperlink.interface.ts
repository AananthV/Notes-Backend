import { Document, Types } from 'mongoose'

import Note from './note.interface'
import Section from './section.interface';

interface Hyperlink extends Document {
    key: string;
    note: Types.ObjectId | Note
    section: Types.ObjectId | Section
}

export default Hyperlink;
