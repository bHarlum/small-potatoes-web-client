import React, { FunctionComponent } from "react"
import PotatoSVG from "../../assets/icons/potato"
import { ButtonContainer } from "./common-styles"

export type IconButtonProps = {
  iconType: IconTypes;
  onClick?: () => void;
  className?: string;
  iconSize?: string;
}

export enum IconTypes {
  potato
}

export const IconButton: FunctionComponent<IconButtonProps> = (props) => {

  const IconMap: Record<IconTypes, JSX.Element> = {
    [IconTypes.potato]: <PotatoSVG height={props.iconSize}/>,
  } 

  return (
    <ButtonContainer className={props.className} onClick={props.onClick}>
      {props.children}
      {IconMap[props.iconType]}
    </ButtonContainer>
  )
}