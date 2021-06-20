import React, { FunctionComponent } from "react"
import styled from "styled-components";
import { pallete } from "../../assets";
import { IconButton, IconTypes } from "../button/Icon-button";

type EstimationBarProps = {
  onClick: (score: number) => void;
  set: Array<number>;
}

export const EstimationBar: FunctionComponent<EstimationBarProps> = (props) => {

  return (
    <ContentContainer>
      {props.set.map((value, index) => {
        const onEstimateClick = () => {
          props.onClick(value)
        }

        return (
          <StyledIconButton key={index} onClick={onEstimateClick} iconSize={"2.5rem"} iconType={IconTypes.potato}>{value}</StyledIconButton>
        )
      })}
    </ContentContainer>
  )
}

const StyledIconButton = styled(IconButton)`
  height: 1rem;
  margin: 0.5rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  height: 5rem;
  width: 50%;
  transform-origin: center;
  transform: translateX(25%);
  background-color: ${pallete.primary};
  margin-bottom: 0.5rem;
  border-radius: 1.5rem;
  padding: 0.5rem;
`;