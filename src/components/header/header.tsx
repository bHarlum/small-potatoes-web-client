import React, { FunctionComponent } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import HomeSVG from "../../icons/home-svg";

type HeaderProps = {
  title: string;
  subTitle?: string;
}


const Header: FunctionComponent<HeaderProps> = (props) => {

  const history = useHistory()

  const onHomeClick = () => {
    history.push("/")
  }

  const onLogoutClick = () => {
      history.push("/logout")
  }

  return (
    <StyledHeader>
      <TitleContainer onClick={onHomeClick}>
        <InnerContainer>
          <StyledHomeIcon color="#FFFF"/>
          <Title>{props.title}</Title>
        </InnerContainer>
        {props.subTitle && <SubTitle>{props.subTitle}</SubTitle>}
      </TitleContainer>
      <LogoutLink onClick={onLogoutClick}>logout</LogoutLink>
    </StyledHeader>
  )
}

export default Header

const StyledHomeIcon = styled(HomeSVG)`
  height: 30px;
`;

const LogoutLink = styled.div`
    padding: 0.8rem;
    text-decoration: underline;
    cursor: pointer;
`;

const StyledHeader = styled.div`
  height: 6rem;
  width: 100%;
  background-color: #48F1B4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Title = styled.h2`
  font-family: "Source Code Pro";
  color: #FFFF;
  margin: 0;
`;

const SubTitle = styled.p`
  font-family: "Source Code Pro";
  color: #FFFF;
  margin: 0;
  font-size: 0.8rem;
`;

const TitleContainer = styled.div`
  cursor: pointer;
  padding-left: 3rem;
  padding-top: 1rem;
`;