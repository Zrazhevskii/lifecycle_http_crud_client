import React from 'react';
import '../styles/Note.css';

export default function Note({ item }) {
    // console.log(item);
    return <div className='note'>{item.content}</div>;
}
