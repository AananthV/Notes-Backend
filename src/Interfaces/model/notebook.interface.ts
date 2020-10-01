import { Document, Types } from 'mongoose';

import Note from './note.interface';
import User from './user.interface';
import Hyperlink from './hyperlink.interface';

interface Notebook extends Document {
    title: string;
    description: string;
    owner: User;
    notes: Array<Types.ObjectId | Note>;
    links: Array<Types.ObjectId | Hyperlink>;
}

export default Notebook;
