"use client";
import { useEffect, useState } from "react";
import loginObservable from "./observer";

function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoginStateChanged = (isLoggedIn: boolean) => {
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
    <div className="bg-gray-500 text-center text-white">
      <p>
        This is a footer.{" "}
        <span>{isLoggedIn ? "Enjoy" : "You need to log in"}</span>
      </p>
    </div>
  );
}

export default Footer;
