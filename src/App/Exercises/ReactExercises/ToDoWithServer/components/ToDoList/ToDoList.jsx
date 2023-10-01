import { MainHeader } from '../../../../../Components/MainHeader';
import { Button } from '../../../../../Components/Button';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import './styles.css';

export const ToDoList = ({ setShowForm, data, setEditObject, getData }) => {
  const handleOnButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <MainHeader>TODO</MainHeader>
      <div className="toDoListWrapper">
        <div className="heading">
          <h2>Tutaj znajdziesz listę swoich zadań</h2>
          <button className="dodaj-todo" onClick={handleOnButtonClick}>
            +
          </button>
        </div>
        <div>
          {data.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                item={item}
                setEditObject={setEditObject}
                setShowForm={setShowForm}
                getData={getData}
              />
            );
          })}
        </div>
        <div>
          <br></br>
          <Button className="addButton" onClick={handleOnButtonClick}>
            Dodaj
          </Button>
        </div>
      </div>
    </div>
  );
};
