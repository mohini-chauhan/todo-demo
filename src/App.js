import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import { getTodoData, deleteTodoData, addTodoData } from "./API/api";

function App() {
  const [todoList, setTodoList] = React.useState([]);
  React.useEffect(() => {
    getTodoData().then((resp) => setTodoList(resp));
  }, []);

  return (
    <article className="App">
      <Banner />
      <TodoContainer todoList={todoList} setTodoList={setTodoList} />
    </article>
  );
}

export default App;
