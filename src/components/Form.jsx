import React from 'react'
import '../styles/Form.css'

export default function Form() {
  return (
    <div className='form-wrapper'>
        <h4 className='title'>Новый пост</h4>
        <textarea name="text" id="" cols="30" rows="10" className='textarea'></textarea>
        <button className='form-btn'>Добавить</button>
    </div>
  )
}
