import { Document } from 'mongoose';

import Section from './section.interface';

interface Note extends Document {
    _id: string;
    title: string;
    sections: Array<Section>;
}

export default Note;
