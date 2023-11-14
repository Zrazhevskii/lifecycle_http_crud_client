import '../styles/Note.css';
import PropTypes from 'prop-types';

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

Note.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }),
    onDelet: PropTypes.func.isRequired
}
