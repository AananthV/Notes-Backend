import * as mongoose from 'mongoose';
import Cell from '../Interfaces/model/cell.interface';

const cellSchema = new mongoose.Schema({
    type: String,
    width: Number,
    url: String,
    text: String,
});

export default cellSchema;
