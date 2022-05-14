import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

export default function UserBar({user, dispatchUser}) {
  
  if (user) {
    return <Logout user={user} dispatchUser={dispatchUser} />;
  } else {
    return (
      <>
        <Login setUser={setUser} />
        <Register setUser={setUser} />
      </>
    );
  }
}