import { useState } from 'react';
import './styles.css';
import { RequestHandler } from '../../helpers';
import ticDoneIcon from '../../../../../Images/todos/ticDoneIcon.svg';
import ticIcon from '../../../../../Images/todos/ticIcon.svg';
import editIcon from '../../../../../Images/todos/editIcon.svg';
import deleteIcon from '../../../../../Images/todos/deleteIcon.svg';

export const ToDoItem = ({ item, setEditObject, setShowForm, getData }) => {
  const [delError, setDelError] = useState('');

  const handleEdit = () => {
    const { id, title, author, note } = item;
    console.log(item);
    setShowForm(true);
    setEditObject({ id, title, author, note });
  };

  const handleMarkAsDone = () => {
    const { id } = item;
    RequestHandler('PUT', `${id}/markAsDone`)
      .then(() => {
        getData();
      })
      .catch(() => setDelError(`Wystąpił błąd!`));
  };

  const handleDelete = () => {
    const { id } = item;
    RequestHandler('DELETE', id)
      .then(() => {
        getData();
      })
      .catch(() => setDelError(`Wystąpił błąd!`));
  };

  return (
    <div className="todo-section">
      <div className="todo-notDone">
        <div>
          <div className="title-and-buttons">
            <h2 className="todo-title">{item.title}</h2>
            <div className="todo-item-buttons">
              {!item.isDone && (
                <button onClick={handleMarkAsDone}>
                  <img src={ticIcon} />
                </button>
              )}
              <button onClick={handleEdit}>
                <img src={editIcon} />
              </button>
              <button onClick={handleDelete}>
                <img src={deleteIcon} />
              </button>
            </div>{' '}
          </div>
          <p className="todo-author">{item.author}</p>
          <p className="todo-date">{item.createdAt}</p>
          <p classname="todo-note">{item.note}</p>
        </div>
      </div>
      <div className="todo-done">
        {item.isDone && <img src={ticDoneIcon} alt="ticDone" />}
        <br></br>
        {item.isDone && <span>{item.doneDate}</span>}
      </div>
    </div>
  );
};

// id	integer($int64)
// title	string
// createdAt	string($date-time)
// author	string
// isDone	boolean
// note	string
// doneDate
