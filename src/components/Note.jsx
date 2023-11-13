import React from 'react';
import '../styles/Note.css';

export default function Note(props) {
    const { item, onDelet } = props;

    return (
        <div className='note'>
            {item.content}
            <button className='note-btn' onClick={() => onDelet(item.id)}>
                Удалить
            </button>
        </div>
    );
}
