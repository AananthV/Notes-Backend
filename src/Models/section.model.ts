import mongoose from 'mongoose';
import { ObjectId } from 'mongodb'
import Section from '../Interfaces/model/section.interface';
import CellSchema from './cell.model';

const sectionSchema = new mongoose.Schema({
    cells: [CellSchema]
});

export default sectionSchema;
