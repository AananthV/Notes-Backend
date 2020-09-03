import Section from './section.interface';

interface Note {
    _id: string;
    title: string;
    sections: Array<Section>;
}

export default Note;
