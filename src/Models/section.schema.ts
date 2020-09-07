import mongoose from 'mongoose';
import { ObjectId } from 'mongodb'
import Section from '../Interfaces/model/section.interface';
import CellSchema from './cell.schema';

const sectionSchema = new mongoose.Schema({
    cells: [CellSchema]
});

export default sectionSchema;
