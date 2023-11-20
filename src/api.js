import axios from 'axios';
import { Valid } from './components/Valid';

const url = 'http://localhost:3000/noutes/';

export const update = async () => {
    const notes = await axios.get(url).then((data) => {
        return data.data;
    });
    return notes;
};

export const create = async (value) => {
    if (Valid(value)) {
        await axios.post(url, {
            id: value.id,
            content: value.content,
        });
    }
};

export const delet = async (id) => {
    const delNote = await axios.delete(url + `${id}`).then((data) => {
        return data.data;
    });
    return delNote;
};
