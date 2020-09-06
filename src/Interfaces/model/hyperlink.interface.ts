import { Types } from 'mongoose'

import Note from './note.interface'
import Section from './section.interface';

interface Hyperlink {
    _id: string;
    key: string;
    note: Types.ObjectId | Note
    section: Types.ObjectId | Section
}

export default Hyperlink;
