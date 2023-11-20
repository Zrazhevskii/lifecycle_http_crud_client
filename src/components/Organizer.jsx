import { useEffect, useState } from 'react';
import Form from './Form';
import Notes from './Notes';
import { update, create, delet } from '../api';

export default function Organizer() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        update().then((data) => {
            setNotes(data);
        });
    }, [notes]);

    const updateNotes = () => {
        update().then((data) => {
            setNotes(data);
        });
    };

    const createNotes = (value) => {
        create(value);
    };

    const deletNotes = (id) => {
        delet(id).then((data) => {
            if (typeof data === 'string') {
                return;
            }
            setNotes(data);
        });
    };

    return (
        <div>
            <Notes data={notes} onUpdate={updateNotes} onDelet={deletNotes} />
            <Form onCreate={createNotes} />
        </div>
    );
}
