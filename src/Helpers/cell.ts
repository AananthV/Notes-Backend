import cellModel from '../Models/cell.model';
import { ObjectId } from 'bson';

/**
 * Create a new Cell
 * @param {ObjectId} sectionId
 * @param {string}   type 
 */
export const createCell = async (sectionId: ObjectId, type: string = "text") => {
    return await cellModel.create({
        type: type,
        width: 1
    });
}

/**
 * Delete a Cell
 * @param {ObjectID} cellId
 */
export const deleteCell = async (cellId: ObjectId) => {
    const success = await cellModel.deleteOne({_id: cellId});
    if (success.deletedCount == 0)
        throw new Error("Cell doesn't exist");
}

/**
 * Change type of cell
 * @param {ObjectID} cellId
 * @param {string}   type
 */
export const changeCellType = async (cellId: ObjectId, type: string) => {
    if (type !== 'text' && type !== 'image') 
        throw new Error("Invalid Cell Type");
    return await cellModel.update({_id: cellId}, {$set: {type: type}});
}

/**
 * Edit a cell
 * @param {ObjectId} cellId
 * @param {string}   text
 * @param {string}   image
 */
export const editCell = async (cellId: ObjectId, text?: string, image?: string) => {
    let cell = await cellModel.findOne({_id: cellId});

    if(!cell) {
        throw new Error("Invalid Cell ID");
    }

    if (cell.type == 'text') {
        cell.text = text;
    } else if(cell.type == 'image') {
        cell.url = image;
    }
    return await cell.save();
}

