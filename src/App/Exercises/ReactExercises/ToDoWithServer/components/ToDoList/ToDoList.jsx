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
      <MainHeader>To do lista</MainHeader>
      <div className="toDoListWrapper">
        <div className="heading">
          <h2>Tutaj znajdziesz listę swoich zadań</h2>
          <button className="dodaj-todo" onClick={handleOnButtonClick}>
            +
          </button>
        </div>
        <div>
          {data.map((item) => {
            // data to dane z serwera setData(response) - response z promisa w requesthandlerze
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
