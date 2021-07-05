import { sign } from "crypto";
import React, { FunctionComponent } from "react"
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { H1 } from "../components/font-headers/font-headers";

const LogoutPage: FunctionComponent = () => {

    const history = useHistory()

    const { signOut, loaded } = useGoogleLogout({
        onFailure: () => { history.push("/") },
        clientId: "684864477132-82ooes05953447to219c7qtr1kkftf4f.apps.googleusercontent.com",
        onLogoutSuccess: () => { history.push("/login") }
      });
    
    signOut();

  return null
}

export default LogoutPage