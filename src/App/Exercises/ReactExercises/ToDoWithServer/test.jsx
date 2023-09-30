import { useState, useEffect } from 'react';
import './style.css';
import { MainHeader } from '../../../Components/MainHeader';
import { Todie } from '../../../Components/Todie';
import { Button } from '../../../Components/Button';

export const Test = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newNote, setNewNote] = useState('');

  const testPost = {
    title: '',
    note: '',
    author: '',
  };

  const addTodo = () => {
    testPost.title = newTitle;
    testPost.author = newAuthor;
    testPost.note = newNote;
    postTodo();
    setNewTitle('');
    setNewAuthor('');
    setNewNote('');
  };

  const addLayout = () => {
    setStatus(true);
  };

  const goBack = () => {
    setStatus(false);
  };

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3333/api/todo');

      if (!response.ok) {
        throw new Error('Wystąpił błąd podczas pobierania listy zadań!');
      }
      const jsonData = await response.json();

      setTodos(jsonData);
      //setLoading(false);
    } catch (error) {
      setError(error.message);

      //setLoading(false);
    }
  };

  const postTodo = async () => {
    try {
      const response = await fetch('http://localhost:3333/api/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testPost),
      });

      if (!response.ok) {
        throw new Error('Wystąpił błąd podczas dodawania nowego zadania!');
      }

      fetchTodos();
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteTodo = async (itemToDelete) => {
    try {
      const response = await fetch(
        `http://localhost:3333/api/todo/${itemToDelete}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Wystąpił błąd podczas usuwania zadania!');
      }

      fetchTodos();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (!status) {
    return (
      <>
        <div className="todo-list">
          <MainHeader>TODO</MainHeader>
          <div className="under-header">
            <h3 className="todo-description">
              Tutaj znajdziesz listę swoich zadań
            </h3>
            <button className="dodaj-todo" onClick={addLayout}>
              +
            </button>
          </div>
          <section>
            <Todie fun={todos} del={deleteTodo}></Todie>
          </section>
        </div>{' '}
      </>
    );
  }

  if (status) {
    return (
      <>
        <div className="todo-list">
          <MainHeader>TODO</MainHeader>
          <h3 className="todo-description">Dodawanie zadania.</h3>
          <section className="todo-add">
            <h2>Tytuł</h2>
            <input
              className="todo-new-title"
              onChange={(event) => {
                setNewTitle(event.target.value);
              }}
            />
            <h2>Autor</h2>
            <input
              className="todo-new-author"
              onChange={(event) => {
                setNewAuthor(event.target.value);
              }}
            />
            <h2>Treść</h2>
            <input
              className="todo-new-note"
              onChange={(event) => {
                setNewNote(event.target.value);
              }}
            />{' '}
            <div className="todo-buttons">
              <Button onClick={addTodo}>Dodaj</Button>
              <Button onClick={goBack}>Cofnij</Button>
              <p className="todo-error">
                {error === 'Wystąpił błąd podczas dodawania nowego zadania!'
                  ? error
                  : null}
              </p>
            </div>{' '}
          </section>
        </div>
      </>
    );
  }
};
