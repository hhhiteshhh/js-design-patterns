"use client";
import { useEffect, useState } from "react";
import loginObservable from "./observer";

function Body() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoginStateChanged = (isLoggedIn:boolean) => {
    setIsLoggedIn(isLoggedIn);
    console.log("Login state changed in Body", isLoggedIn);
  };

  useEffect(() => {
    loginObservable.subscribe(onLoginStateChanged);
    return () => {
      loginObservable.unsubscribe(onLoginStateChanged);
    };
  }, [loginObservable]);
  return (
    <div className="h-96">
      {isLoggedIn
        ? "This is a observer design pattern design."
        : "You need to log in"}
    </div>
  );
}

export default Body;
