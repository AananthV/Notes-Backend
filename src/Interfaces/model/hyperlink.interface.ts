import { Document } from 'mongoose';

import Section from './section.interface';
import Notebook from './notebook.interface';

interface Hyperlink extends Document {
    _id: string;
    key: string;
    link: Section;
    notebook: Notebook;
}

export default Hyperlink;
