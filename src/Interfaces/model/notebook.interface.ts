import mongoose from 'mongoose'

import Note from './note.interface';
import User from './user.interface';
import Hyperlink from './hyperlink.interface';

interface Notebook {
    _id: string;
    title: string;
    description: string;
    owner: User;
    notes: Array<mongoose.Schema.Types.ObjectId | Note>;
    links: Array<mongoose.Schema.Types.ObjectId | Hyperlink>;
}

export default Notebook;
