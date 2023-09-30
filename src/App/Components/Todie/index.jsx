import './styles.css';
import deleteIcon from '../../Images/todos/deleteIcon.svg';
import editIcon from '../../Images/todos/editIcon.svg';
import ticIcon from '../../Images/todos/ticIcon.svg';

export const Todie = ({ fun, del }) => {
  return fun.map((todo) => {
    return (
      <div className="todo-section">
        <h2 className="todo-title">
          {todo.title}
          <div className="todies-buttons">
            <button onClick={() => del(todo.id)}>
              <img src={deleteIcon} alt="delete" />
            </button>{' '}
            <button>
              <img src={editIcon} alt="edit" />
            </button>{' '}
            <button>
              <img src={ticIcon} alt="tic" />
            </button>
          </div>
        </h2>

        <p className="todo-author">{todo.author}</p>
        <p className="todo-date">{todo.createdAt}</p>
        <p className="todo-note">{todo.note}</p>
      </div>
    );
  });
};
