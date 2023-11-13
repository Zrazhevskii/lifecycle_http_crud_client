import React, { useState } from 'react';
import '../styles/Form.css';

export default function Form({ onCreate }) {
    const [note, setNote] = useState('');

    const handleChangeNote = (e) => {
        e.preventDefault();
        setNote(() => e.target.value);
    };

    const handlSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            content: note,
        };
        onCreate(newNote);
        setNote('');
    };

    return (
        <form className='form-wrapper' onSubmit={handlSubmit}>
            <h4 className='title'>Новый пост</h4>
            <textarea
                name='text'
                id=''
                cols='30'
                rows='10'
                value={note}
                onChange={handleChangeNote}
                className='textarea'
            ></textarea>
            <button className='form-btn'>Добавить</button>
        </form>
    );
}
