import React, { ChangeEvent, useEffect, useState } from "react"
import styled from "styled-components"
import { pallete } from "../../assets"

export type NewItemState = {
  title: string;
  description: string;
}

type OwnProps = {
  onChange: (currentState: NewItemState) => void
}

export const NewItem = ({onChange}: OwnProps) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  useEffect(() => onChange({title, description}), [title, description])

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  return (
    <NewItemContainer>
      <Input value={title} onChange={onTitleChange} placeholder="Title"/> 
      <Field value={description} onChange={onDescriptionChange} placeholder="Description"/> 
    </NewItemContainer>
  )
}

const NewItemContainer = styled.div`
  border: 1px solid ${pallete.primary};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1px;
`;

const Input = styled.input`
  margin: 0.5rem 0 0 0;
  border: 1px solid ${pallete.primary};;
  border-top: none;
  border-right: none;
  &:focus {
    outline: none;
  }
`

const Field = styled.textarea`
  margin: 0.5rem 0 0 0;
  border: 1px solid ${pallete.primary};;
  border-top: none;
  border-right: none;
  height: 5rem;
  &:focus {
    outline: none;
  }
`