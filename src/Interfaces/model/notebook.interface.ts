import Note from './note.interface';
import User from './user.interface';
import Hyperlink from './hyperlink.interface';

interface Notebook {
    _id: string;
    owner: User;
    notes: Array<Note>;
    links: Array<Hyperlink>;
}

export default Notebook;
