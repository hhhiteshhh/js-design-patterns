"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import loginObservable from "./observer";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    loginObservable.subscribe(onLoginStateChanged);
    return () => {
      loginObservable.unsubscribe(onLoginStateChanged);
    };
  }, [loginObservable]);
  const onLoginStateChanged = (isLoggedIn: boolean) => {
    setIsLoggedIn(isLoggedIn);
    console.log("Login state changed in Header", isLoggedIn);
  };
  return (
    <div className="flex items-center justify-between bg-gray-300 mt-5 p-2">
      <p>This is a header</p>

      {isLoggedIn ? (
        <Button
          onClick={() => {
            loginObservable.notify(false);
          }}
        >
          Logout
        </Button>
      ) : (
        <Button
          onClick={() => {
            loginObservable.notify(true);
          }}
        >
          Log in
        </Button>
      )}
    </div>
  );
}

export default Header;
