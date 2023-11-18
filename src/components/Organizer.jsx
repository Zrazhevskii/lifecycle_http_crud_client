import { useState } from 'react';
import Form from './Form';
import Notes from './Notes';
import axios from 'axios';

export default function Organizer() {
    const [notes, setNotes] = useState([]);

    const url = 'http://localhost:3000/noutes/';

    const updateNotes = () => {
        axios.get(url).then((data) => {
            setNotes(data.data);
        });
    };

    const createNotes = (value) => {
        axios.post(url, {
            id: value.id,
            content: value.content,
        });

        updateNotes();
    };

    const deletNote = (id) => {
        axios.delete(`http://localhost:3000/noutes/${id}`).then((data) => {
            setNotes(data.data);
        });
    };

    updateNotes();

    return (
        <div>
            <Notes
                data={notes}
                onUpdate={updateNotes}
                onDelet={deletNote}
            />
            <Form onCreate={createNotes} />
        </div>
    );
}
