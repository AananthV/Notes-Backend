import * as mongoose from 'mongoose';
import Hyperlink from '../Interfaces/model/hyperlink.interface';

const hyperlinkSchema = new mongoose.Schema({
    key: String,
    link: {
        type: mongoose.Types.ObjectId,
        ref: 'Section',
    },
    notebook: {
        type: mongoose.Types.ObjectId,
        ref: 'Notebook',
    },
});

const hyperlinkModel = mongoose.model<Hyperlink & mongoose.Document>('Hyperlink', hyperlinkSchema);

export default hyperlinkModel;
