import React, { FunctionComponent } from "react"
import { ButtonContainer } from "./common-styles";

type ButtonProps = {
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = (props) => {

  return (
    <ButtonContainer onClick={props.onClick}>
      {props.children}
    </ButtonContainer>
  )
}



export default Button