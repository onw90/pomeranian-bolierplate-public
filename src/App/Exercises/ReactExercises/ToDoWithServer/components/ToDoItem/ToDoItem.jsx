import { useState } from 'react';
import './styles.css';
import { RequestHandler } from '../../helpers';
import ticDoneIcon from '../../../../../Images/todos/ticDoneIcon.svg';
import ticIcon from '../../../../../Images/todos/ticIcon.svg';
import editIcon from '../../../../../Images/todos/editIcon.svg';
import deleteIcon from '../../../../../Images/todos/deleteIcon.svg';
import deleteErrorIcon from '../../../../../Images/todos/deleteErrorIcon.svg';
import ticErrorIcon from '../../../../../Images/todos/ticErrorIcon.svg';
import { formatDate } from '../formatDate';

export const ToDoItem = ({ item, setEditObject, setShowForm, getData }) => {
  const [delError, setDelError] = useState('');
  const [doneError, setDoneError] = useState('');

  const handleEdit = () => {
    const { id, title, author, note } = item;
    //console.log(item);
    setShowForm(true);
    setEditObject({ id, title, author, note });
  };

  const handleMarkAsDone = () => {
    const { id } = item;
    RequestHandler('PUT', `${id}/markAsDone`)
      .then(() => {
        getData();
      })
      .catch(() => {
        setDoneError(`Nie udało się ukończyć!`);
      });
  };

  const handleDelete = () => {
    const { id } = item;
    RequestHandler('DELETE', id)
      .then(() => {
        getData();
      })
      .catch(() => setDelError(`Nie udało się ukończyć!`));
  };

  return (
    <>
      <div className={!item.isDone ? 'todo-section' : 'todo-section-done'}>
        <div className="prawa">
          <div className="todo-item-buttons">
            {!item.isDone && (
              <button onClick={handleMarkAsDone}>
                <img
                  src={!doneError ? ticIcon : ticErrorIcon}
                  className={!doneError ? 'well-done' : 'todo-error'}
                />
              </button>
            )}
            <button onClick={handleEdit}>
              <img src={editIcon} />
            </button>
            <button onClick={handleDelete}>
              <img
                src={!delError ? deleteIcon : deleteErrorIcon}
                className={!delError ? 'well-done' : 'todo-error'}
              />
            </button>{' '}
            {delError && <span className="todo-error">{delError}</span>}
            {doneError && <span className="todo-error">{doneError}</span>}
            <div className="todo-done">
              {item.isDone && <img src={ticDoneIcon} alt="ticDone" />}
              <br></br>
              {item.isDone && <span>{formatDate(item.doneDate)}</span>}
            </div>
          </div>
        </div>
        <div className="lewa">
          <h2 className="todo-title">{item.title}</h2>
          <p className="todo-author">{item.author}</p>
          <p className="todo-date">{formatDate(item.createdAt)}</p>
          <p classname="todo-note">{item.note}</p>
        </div>
      </div>
    </>
  );
};

// id	integer($int64)
// title	string
// createdAt	string($date-time)
// author	string
// isDone	boolean
// note	string
// doneDate
