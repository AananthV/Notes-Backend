import { Types } from 'mongoose';
import Note, { NoteDocument } from '../Interfaces/model/note.interface';
import Cell from '../Interfaces/model/cell.interface';

/**
 * adds a new section to the note
 * @param note _id or Document of the note to which the section has to be added
 */
export const addSection = async (note: NoteDocument, noOfCells = 1) => {
    noOfCells = Math.min(noOfCells, 3); // limit the number of cells to 3

    note.sections.push({ cells: <Types.DocumentArray<Cell>>Array(0) });
    // populate the section with noOfCell

    return await note.save();
};

/**
 * get the section with _id provided, null if not found
 * @param note Note in which the section is present
 * @param id _id of the section
 */
export const getSectionInNote = (note: Note, id: Types.ObjectId) => {
    const section = note.sections.id(id);
    if (!section) throw new Error('Section not found');
    return section;
};

/**
 * swap cells in a section (reorder cells)
 * @param note Documet of note where the section is present
 * @param id _id of section
 * @param index1 index of the cell to swap
 * @param index2 index of the cell to swap with
 */
export const swapCellsInSection = async (note: NoteDocument, id: Types.ObjectId, index1: number, index2: number) => {
    const sectionIndex = note.sections.findIndex((val) => val._id == id);
    const noOfSections = note.sections.length;
    if (sectionIndex == -1) throw new Error('Section not found');

    if (index1 < 0 || index1 >= noOfSections || index2 < 0 || index2 >= noOfSections)
        throw new Error('Index out of bounds');

    [note.sections[sectionIndex].cells[index1], note.sections[sectionIndex].cells[index2]] = [
        note.sections[sectionIndex].cells[index2],
        note.sections[sectionIndex].cells[index1],
    ];
    return await note.save();
};

/**
 * delete a section
 * @param id _id of section to delete
 */
export const removeSection = async (note: NoteDocument, id: Types.ObjectId) => {
    note.sections.pull(id);

    return await note.save();
};
