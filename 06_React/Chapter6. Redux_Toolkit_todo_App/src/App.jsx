import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo, toggleTodo } from "./store/todoSlice";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");

  const todos = useSelector((state) => {
    if (filter === "completed") {
      return state.todos.filter((todo) => todo.completed);
    } else if (filter === "active") {
      return state.todos.filter((todo) => !todo.completed);
    } else {
      return state.todos;
    }
  });

  // todo를 추가하는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      // input값이 빈 값이 아닌지 확인
      dispatch(addTodo(text));
      setText("");
    }
  };
  // todo를 삭제하는 함수
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  //todo를 수정하는 함수
  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  //todo 수정이 완료 상태변경 함수
  const handleEditCancel = () => {
    setEditId(null);
    setEditText("");
  };

  //todo 수정한 text 저장 함수
  const handleEditSave = () => {
    if (editText.trim() !== "") {
      dispatch(
        editTodo({
          id: editId,
          newText: editText,
        })
      );
      setEditId(null);
      setEditText("");
    }
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className="container">
      <div className="wapper">
        <h1>할일 목록</h1>
        <div>
          <label>
            필터:
            <select
              className="filter"
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="all">All</option>
              <option value="completed">완료</option>
              <option value="active">진행중</option>
            </select>
          </label>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="todo__input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="submit__btn" type="submit">
            할일 추가하기
          </button>
        </form>

        <ul>
          {todos.map((todo) => (
            <li className="todo" key={todo.id}>
              {todo.id === editId ? (
                <>
                  <div>
                    <input
                      className="edit__input"
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                  </div>
                  <div>
                    <button className="edit__btn" onClick={handleEditSave}>
                      저장
                    </button>
                    <button className="edit__btn" onClick={handleEditCancel}>
                      취소
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => dispatch(toggleTodo(todo.id))}
                    />
                    <span>{todo.text}</span>
                  </div>
                  <div>
                    <button
                      className="todo__btn"
                      onClick={() => handleEdit(todo.id, todo.text)}
                    >
                      수정
                    </button>
                    <button
                      className="todo__btn"
                      onClick={() => handleDelete(todo.id)}
                    >
                      삭제
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
