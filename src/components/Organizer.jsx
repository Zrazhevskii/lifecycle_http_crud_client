import React, { useEffect, useState } from 'react';
import Form from './Form';
import Notes from './Notes';
import axios from 'axios';

export default function Organizer() {
    const [getAddNotes, setGetAddNote] = useState([]);

    const url = 'http://localhost:3000/noutes/';

    const updateNotes = () => {
        axios.get(url).then((data) => {
            setGetAddNote(data.data);
        });
    };

    const addNotes = (value) => {
        axios.post(url, {
            id: value.id,
            content: value.content,
        });

        updateNotes();
    };

    const deletNote = (id) => {
        axios.delete(`http://localhost:3000/noutes/${id}`).then((data) => {
            setGetAddNote(data.data);
        });

        // updateNotes()
    };

    updateNotes();

    return (
        <div>
            <Notes
                data={getAddNotes}
                onUpdate={updateNotes}
                onDelet={deletNote}
            />
            <Form onCreate={addNotes} />
        </div>
    );
}
