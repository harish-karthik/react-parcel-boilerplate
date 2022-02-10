import React from "react";
import Image from "jsx:./assets/logo.svg";
import svgUrl from "./assets/logo.svg";
import "./App.css";

export const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <img src={svgUrl} width={200} />
    </>
  );
};
