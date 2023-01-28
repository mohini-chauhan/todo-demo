import React from "react";
import PropTypes from "prop-types";
import styles from "./TodoContainer.module.scss";
import ToDoTile from "../toDoTile/toDoTile";
import Form from "../Form/Form";
import { deleteTodoData, addTodoData } from "../../API/api";

const TodoContainer = ({ todoList, setTodoList }) => {
  const handleDelete = (id) =>
    deleteTodoData(id).then((resp) => {
      setTodoList((prevList) => prevList.filter((item) => item.id !== id));
    });

  const createNewTask = (title) => {
    if (title !== "") {
      let payload = {
        title: title,
        completed: false,
      };
      addTodoData(payload).then((resp) => {
        setTodoList((prevList) => [
          ...prevList,
          { ...resp, id: prevList[prevList.length - 1].id + 1 },
        ]);
      });
    }
  };
  return (
    <article className={styles.TodoContainer}>
      <Form createNewTask={createNewTask} />
      {todoList.length === 0 ? (
        <p className={styles.TodoContainer__emptyTodo}>
          "No active todo's found"
        </p>
      ) : (
        <section className={styles.TodoContainer__todoListWrapper}>
          {todoList.map((task, id) => (
            <ToDoTile
              key={task.id}
              taskTitle={task.title}
              taskId={task.id}
              taskCompleted={task.completed}
              handleDelete={handleDelete}
            />
          ))}
        </section>
      )}
    </article>
  );
};

TodoContainer.propTypes = {};

TodoContainer.defaultProps = {};

export default TodoContainer;
