import styled from "styled-components";
import { pallete } from "../../assets";


export const ButtonContainer = styled.button`
  display: inline-block;
  padding: 0.8rem;
  background-color: ${pallete.primary};
  border-radius: 15px;
  color: ${pallete.white};
  cursor: pointer;
  border: none;
  outline: none;
`;