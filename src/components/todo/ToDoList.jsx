import { useDispatch, useSelector } from "react-redux";
import { TodoDeleteAlert } from "./ToDoDeleteAlert";
import { ToggleToDo } from "../../redux/state/todo/todoSlice";

const ToDoList = () => {
  const todoItems = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Task Name</th>
                <th>Check</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todoItems.map((item, i) => {
                return (
                  <tr key={i.toString()}>
                    <td>{i}</td>
                    <td>{item}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => dispatch(ToggleToDo(item.i))}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          TodoDeleteAlert(i);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
