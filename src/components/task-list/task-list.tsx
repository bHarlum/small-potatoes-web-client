import React from "react";
import styled from "styled-components";
import { pallete } from "../../assets";
import { Item } from "../../client/types";

type TaskListProps = {
  items: Item[];
  currentTask: number;
}

const TaskList = (props: TaskListProps) => {
  
  return (
    <TaskListContainer>

      {props.items.map((item, index) => {
        return (
          <TaskCardContainer estimated={index < props.currentTask} key={index}>
            <Header>{item.title}</Header>
          </TaskCardContainer>
        )
      })}
    </TaskListContainer>
  )
}

const TaskListContainer = styled.div`
  width: 20%;
  height: 100%;
  border-right: 2px solid ${pallete.black};
`;

const Header = styled.h2`
`;

const TaskCardContainer = styled.div<{estimated: boolean}>`
  ${(p) => p.estimated ? `background-color: ${pallete.altWhite}` : ""};
  color: ${pallete.black};
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${pallete.black};
`;

export default TaskList;