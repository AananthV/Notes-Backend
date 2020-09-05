import { Document } from 'mongoose';

interface Cell extends Document {
    _id: string;
    type: string;
    width: number;
    url?: string;
    text?: string;
}

export default Cell;
