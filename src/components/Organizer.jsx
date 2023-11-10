import React from 'react';
import Form from './Form';
import Notes from './Notes';

export default function Organizer() {

    const data = [
        {
            id: 1,
            content: 'Какой-то пост',
        },
    ]

    const addNotes = () => {

    }

    return (
        <div>
            <Notes data={data}/>
            <Form/>
        </div>
    )
}
