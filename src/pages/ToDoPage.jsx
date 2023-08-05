import CreateToDo from "../components/todo/CreateToDo";
import ToDoList from "../components/todo/ToDoList";

const ToDoPage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="text-center">My Todo App</h5>
            </div>
            <div className="card-body">
              <CreateToDo />
              <ToDoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoPage;
