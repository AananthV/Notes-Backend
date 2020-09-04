import { Document } from 'mongoose';

import Cell from './cell.interface';

interface Section extends Document {
    _id: string;
    cells: Array<Cell>;
}

export default Section;
