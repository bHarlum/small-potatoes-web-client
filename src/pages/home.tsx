import React, { FunctionComponent } from "react"
import { useHistory } from "react-router";
import styled from "styled-components";
import Button from "../components/button/button"
import { H1 } from "../components/font-headers/font-headers";

const HomePage: FunctionComponent = () => {

  const history = useHistory()

  const onNewRoomClick = () => {
    history.push("/new-room");
  }


  return (
    <PageContainer>
      <H1>Estimate. Collaborate. Create.</H1>
      <Button onClick={onNewRoomClick}>Create your room here!</Button>
    </PageContainer>
  )
}

const PageContainer =  styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
`;

export default HomePage