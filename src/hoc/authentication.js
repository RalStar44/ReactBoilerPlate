/**
 * @file Authentication.js
 */

import React from "react";
import { Container } from "@mui/material";
import useAuthentication from "../hooks/useAuthentication";

/**
 * Authentication component that renders either a login or logout component based on user's authentication status.
 *
 * @returns {JSX.Element} The rendered authentication component.
 */
const Authentication = () => {
  const { isLoggedIn } = useAuthentication();

  return (
    <Container>
      {isLoggedIn ? <Logout /> : <Login />}
    </Container>
  );
};

/**
 * Memoized version of the Authentication component.
 *
 * @type {React.MemoExoticComponent}
 */
const MemoizedAuth = React.memo(Authentication);

export default MemoizedAuth;
