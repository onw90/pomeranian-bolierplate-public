import { useState } from 'react';
import { RequestHandler } from '../../helpers';
import { Button } from '../../../../../Components/Button';
import './styles.css';

export const ToDoForm = ({
  setShowForm,
  getData,
  setEditObject,
  editObject,
}) => {
  console.log(editObject);
  const [todo, setTodo] = useState({
    title: editObject ? editObject.title : '',
    author: editObject ? editObject.author : '',
    note: editObject ? editObject.note : '',
  });
  const [formError, setFormError] = useState('');
  const isEditMode = Boolean(editObject);

  const editTodo = () => {
    RequestHandler('PUT', editObject.id, todo)
      .then(() => {
        getData();
        setShowForm(false);
      })
      .catch(() => setFormError(`Wystąpił błąd!`));
  };

  const handleChange = (e, key) => {
    setTodo({
      ...todo,
      [key]: e.target.value,
    });
  };

  const addTodo = () => {
    RequestHandler('POST', '', todo)
      .then(() => {
        getData();
        setShowForm(false);
        setEditObject();
      })
      .catch(() => setFormError(`Wystąpił błąd!`));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    isEditMode ? editTodo() : addTodo();
    setEditObject();
  };

  const handleBack = () => {
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <label className="form-label-title" htmlFor="title">
          Tytuł
        </label>
        <br />
        <input
          type="text"
          name="title"
          onChange={(e) => handleChange(e, 'title')}
          value={todo.title}
          required
        />
      </div>
      {!isEditMode && (
        <div className="form-container">
          <label className="form-label-title" htmlFor="author">
            Autor
          </label>
          <br />
          <input
            type="text"
            name="author"
            onChange={(e) => handleChange(e, 'author')}
            value={todo.author}
            required
          />
        </div>
      )}
      <div className="form-container">
        <label className="form-label-title" htmlFor="note">
          Treść
        </label>
        <br />
        <textarea
          name="note"
          cols="30"
          rows="10"
          onChange={(e) => handleChange(e, 'note')}
          value={todo.note}
          required
        ></textarea>
      </div>
      <div className="form-buttons">
        <Button onClick={handleBack}>Cofnij</Button>
        <input
          className="form-dodaj-edytuj"
          type="submit"
          value={isEditMode ? 'Edytuj' : 'Dodaj!'}
        />
      </div>
      {formError && <span>{formError}</span>}
    </form>
  );
};
