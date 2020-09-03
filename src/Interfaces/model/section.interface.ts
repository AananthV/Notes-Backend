import { Types } from 'mongoose';

import Cell from './cell.interface';

interface Section {
    _id: string;
    cells: Array<Cell>;
}

export default Section;
