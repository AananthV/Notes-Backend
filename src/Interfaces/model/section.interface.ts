import Cell from './cell.interface';
import { Types } from 'mongoose';

interface Section extends Types.Subdocument {
    cells: Types.DocumentArray<Cell>;
}

export default Section;
