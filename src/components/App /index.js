import React from "react";
import css from "./App.module.css";
import Text from "../../components/Text";
import Links from "../Links";

function App() {
  return (
    <div className={css.body}>
      <Text />
      <Links />
    </div>
  );
}

export default App;
