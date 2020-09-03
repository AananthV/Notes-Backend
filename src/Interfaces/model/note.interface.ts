import Section from './section.interface';

interface Note {
    _id: string;
    sections: Array<Section>;
}

export default Note;
