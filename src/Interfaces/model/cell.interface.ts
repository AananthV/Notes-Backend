import { Types } from 'mongoose';

interface Cell extends Types.Subdocument {
    type: string;
    width: number;
    url?: string;
    text?: string;
}

export default Cell;
