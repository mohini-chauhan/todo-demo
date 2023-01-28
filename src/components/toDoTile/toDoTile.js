import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import todoIcon from "../../assets/todoIcon.png";
import remove from "../../assets/remove.png";

const StyledTodoTile = styled.article`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
  margin: 5px auto;
  background-color: ${(props) =>
    props.isChecked ? "rgb(237 157 120 / 25%)" : "rgb(237, 157, 120)"};
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
const StyledUserSection = styled.section`
  width: 80%;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  @media screen and (max-width: 768px) {
    gap: 5px;
    padding: 0;
  }
`;
const StyledAvatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 35%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const StyledUserInfo = styled.section`
  height: ${(props) => props.Height};
  width: ${(props) => props.width};
  display: block;
  padding: 10px 15px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
const StyledIconSection = styled.section`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
`;

const StyledIcons = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const ToDoTile = ({
  width,
  Height,
  taskId,
  taskTitle,
  taskCompleted,
  handleDelete,
}) => {
  const [isChecked, setChecked] = useState(taskCompleted);
  return (
    <StyledTodoTile isChecked={isChecked}>
      <StyledUserSection>
        <input
          type="checkbox"
          checked={isChecked}
          id={taskId}
          value={taskTitle}
          onChange={(e) => {
            setChecked((prev) => !prev);
          }}
        />
        <StyledAvatar src={todoIcon} alt="todo icon" />
        <StyledUserInfo>
          <h4>Task: {taskId}</h4>
          <p>
            <b>Title :</b>
            {taskTitle}
          </p>
        </StyledUserInfo>
      </StyledUserSection>
      <StyledIconSection>
        <StyledIcons src={remove} onClick={() => handleDelete(taskId)} />
      </StyledIconSection>
    </StyledTodoTile>
  );
};

ToDoTile.propTypes = {};

ToDoTile.defaultProps = {};

export default ToDoTile;
