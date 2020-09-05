import mongoose from 'mongoose'

import Note from './note.interface'
import Section from './section.interface';

interface Hyperlink {
    _id: string;
    key: string;
    note: mongoose.Types.ObjectId | Note
    section: mongoose.Types.ObjectId | Section
}

export default Hyperlink;
