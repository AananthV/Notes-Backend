import * as mongoose from 'mongoose';
import Hyperlink from '../Interfaces/model/hyperlink.interface';

const hyperlinkSchema = new mongoose.Schema({
    key: String,
    note: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note',
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note.section',
    },
});

const hyperlinkModel = mongoose.model<Hyperlink & mongoose.Document>('Hyperlink', hyperlinkSchema);

export default hyperlinkModel;
