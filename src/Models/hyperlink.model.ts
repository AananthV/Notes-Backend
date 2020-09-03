import * as mongoose from 'mongoose';
import Hyperlink from '../Interfaces/model/hyperlink.interface';

const hyperlinkSchema = new mongoose.Schema({
    key: String,
    cell: {
        type: mongoose.Types.ObjectId,
        ref: 'Cell',
    },
});

const hyperlinkModel = mongoose.model<Hyperlink & mongoose.Document>('Hyperlink', hyperlinkSchema);

export default hyperlinkModel;
