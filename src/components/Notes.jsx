import React from 'react';
import '../styles/Notes.css';
import Note from './Note';

export default function Notes(props) {
    const { data, onUpdate, onDelet } = props;

    return (
        <div className='notes-wrapper'>
            <div className='title-notes'>
                <h2 className='title-box'>Notes</h2>
                <button className='notes-btn' onClick={onUpdate}>
                    🔄
                </button>
            </div>
            <div className='notes'>
                {data.map((item) => {
                    return <Note item={item} key={item.id} onDelet={onDelet} />;
                })}
            </div>
        </div>
    );
}
