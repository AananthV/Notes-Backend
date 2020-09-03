import * as mongoose from 'mongoose';
import Section from '../Interfaces/model/section.interface';

const sectionSchema = new mongoose.Schema({
    cells: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Cell',
        },
    ],
});

const sectionModel = mongoose.model<Section & mongoose.Document>('Section', sectionSchema);

export default sectionModel;
