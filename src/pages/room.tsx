import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from "recoil"
import styled from "styled-components";
import { GetRoomResponse } from "../client/types";
import { EstimationBar } from "../components/esitimation-bar/estimation-bar";
import TaskList from "../components/task-list/task-list";
import { getTimestamp } from "../helpers/get-timestamp";
import { currentRoom, getRoom, lastInteraction, sessionClient, sessionToken } from "../state"

const RoomPage = () => {

  const [roomId] = useRecoilState(currentRoom)

  const socket = roomId ? new WebSocket(`ws://localhost:8080/event/${roomId}`, "protocolOne") : undefined;

  const history = useHistory()


  useEffect(() => {
    if(socket) {
    socket.onmessage = () => {
      setLastInteraction(getTimestamp())
    }
  
    socket.onclose = () => {
      // history.push("/")
    }
    return socket?.close()
    }
  }, [socket])


  const { state, contents } = useRecoilValueLoadable<GetRoomResponse>(getRoom);

  const setCurrentRoom = useSetRecoilState(currentRoom)
  const setLastInteraction = useSetRecoilState(lastInteraction)
  const [client] = useRecoilState(sessionClient)
  const [currentUser] = useRecoilState(sessionToken)

  const [error, setErrorText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams<{id: string}>()

  const onEstimateClick = (estimate: number) => {
    client.estimate({estimation: estimate, userId: currentUser, roomId: id});
    setLastInteraction(getTimestamp())
  }

  useEffect(() => {
    setCurrentRoom(id)
  }, [id])


  useEffect(() => {
    switch(state) {
      case "loading":
        setIsLoading(true)
        break
      case "hasError":
        setErrorText(`Was unable to create room. ${contents}`)
        break
      case "hasValue":
        setErrorText("");
        setIsLoading(false);
    }
  }, [state, contents])
  

  // @ts-ignore
  if(!contents?.id || !contents.items) {
    return null;
  }
  // @ts-ignore
  const Item: Item = contents.items[contents.currentItem]

  if(isLoading) {
    return <div>...Loading...</div>
  }

  if(error) {
    return <div>Seems we have an error :( Try refreshing</div>
  }

  const {items, currentItem} = contents as GetRoomResponse;

  return (
    <PageContainer>
      <TaskList items={items} currentTask={currentItem} />
      <ContentContainer>
        <h1>{Item.title}</h1>
        <p>{Item.description}</p>
        <EstimationBar onClick={onEstimateClick} set={[1,2,3,5,8]}/>

      </ContentContainer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  height: 100%;
`;

const ContentContainer = styled.div`
  padding: 1rem 0 0 1rem;
`;

export default RoomPage