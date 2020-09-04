import * as mongoose from 'mongoose';

import Section from '../Interfaces/model/section.interface';
import Notebook from '../Interfaces/model/notebook.interface';
import hyperlinkModel from '../Models/hyperlink.model';

/**
 * Create a hyperlink
 * @param {string} key
 * @param {Section} link
 * @param {Notebook} notebook
 */
export const addHyperlink = async (key: string, link: Section, notebook: Notebook) => {
    const hyperlink = await hyperlinkModel.create({ key: key, link: link, notebook: notebook });
    notebook.links.push(hyperlink);
    notebook.save();
};

/**
 * Get an existing hyperlink
 * @param {string} key
 * @param {Notebook} notebook
 */
export const getHyperlink = async (key: string, notebook: Notebook) => {
    return hyperlinkModel.find({ key: key, notebook: notebook });
};

/**
 * Delete an existing hyperlink
 * @param {mongoose.Types.ObjectId} id
 */
export const deleteHyperlink = async (id: mongoose.Types.ObjectId) => {
    return hyperlinkModel.deleteOne({ _id: id });
};
