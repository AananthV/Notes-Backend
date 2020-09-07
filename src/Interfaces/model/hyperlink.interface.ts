import { Document } from 'mongoose'

import Cell from './cell.interface';

interface Hyperlink extends Document {
    key: string;
    link: Cell;
}

export default Hyperlink;
