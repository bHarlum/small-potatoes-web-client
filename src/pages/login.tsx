import React, { FunctionComponent } from "react"
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { H1 } from "../components/font-headers/font-headers";

const LoginPage: FunctionComponent = () => {

    const history = useHistory()

    const onSuccess = (res: any) => {
        console.log(res)
        history.push("/")
    }

  return (
    <PageContainer>
      <H1>Login</H1>
        <GoogleLogin
            clientId="684864477132-82ooes05953447to219c7qtr1kkftf4f.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onSuccess}
            cookiePolicy={'single_host_origin'}
        />
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

export default LoginPage