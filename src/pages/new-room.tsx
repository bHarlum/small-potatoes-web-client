import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { pallete } from "../assets";
import Button from "../components/button/button";
import { H2, H4 } from "../components/font-headers/font-headers";
import { NewItem, NewItemState } from "../components/new-item/new-item";
import { sessionOwner, createNewRoom, draftItems } from "../state";

type Item = {
  title: string;
  description: string;
}

const NEW_ITEM = {
    title: "",
    description: "",
}

const NewRoom = () => {

  const [ownerName, setOwnerName] = useState("");
  const [errorText, setErrorText] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [draftItem, setDraftItem] = useState<Item>(NEW_ITEM);
  const [isLoading, setIsLoading] = useState(false);
  const setUserName = useSetRecoilState(sessionOwner);
  const setDraftItems = useSetRecoilState(draftItems);
  const { state, contents } = useRecoilValueLoadable(createNewRoom);
  const history = useHistory()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOwnerName(e.target.value);
  }

  const handleDraftItemChange = (newState: NewItemState) => {
    setDraftItem(newState)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorText("");
    if(!ownerName) {
      setErrorText("*Name is required")
      return
    }
    if(items.length < 1) {
        setErrorText("*Must have at leat one")
        return
    }
    setUserName(ownerName);
    setDraftItems(items);
  }

  const updateItems = (index: number, newValues: Item) => {
    const newState = [...items];
    newState[index] = newValues;
    setItems(newState)
  }

  const onAddItem = () => {
    setItems([...items, draftItem])
  }

  useEffect(() => {
    switch(state) {
      case "loading":
        setIsLoading(true)
        break
      case "hasError":
        setErrorText(`Was unable to create room. ${contents}`)
        break
      case "hasValue":
        if(ownerName){
          // @ts-ignore
          history.push(`/room/${contents.id}`)
        }
      break
    }
  }, [state, contents])

  return (
    <StyledPageContainer>
        <OuterContainer>
            <InnerContainer>
                <H2>
                New Room
                </H2>
                    <form onSubmit={handleSubmit}>
                        <FormContainer >
                            <NewRoomInput  value={ownerName} onChange={handleChange} placeholder="Your name"/>
                            <Button>Create</Button>
                            {<ErrorText>{errorText}</ErrorText>}
                            {isLoading && <LoadingText>Loading...</LoadingText>}
                            <NewItem key={0} onChange={handleDraftItemChange} />
                        </FormContainer>
                    </form>
                <Button onClick={onAddItem}>Add+</Button>
            </InnerContainer>
            <InnerContainer>
                {items.map((item, index) => {
                    return (
                        <H4 key={index}>{item.title}</H4>
                    )
                })}
            </InnerContainer>
        </OuterContainer>
    </StyledPageContainer>
  );
}

const OuterContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const StyledPageContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const ErrorText = styled.p`
  color: ${pallete.error};
  font-size: 0.8rem;
`;

const LoadingText = styled.p`
  color: ${pallete.primary};
  font-size: 0.8rem;
`;

const InnerContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 25%;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const NewRoomInput = styled.input`
  text-align: center;
  height: 1.8rem;
  border-radius: 15px;
  margin-bottom: 0.8rem;
  outline: none;
`;


export default NewRoom