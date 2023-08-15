import React from "react";
import { Container } from "@mui/material";
import useAuthentication from "../hooks/authentication";

const Authentication= ()=>{
  const {isLoggedIn}= useAuthentication();      
    return(
    <Container>
        !isLoggedIn ? <Login /> : <Logout />
    </Container>
    );
};

export default MemoizedAuth= React.memo(Authentication);