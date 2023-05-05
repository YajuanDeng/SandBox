import "./styles.css";
import { Person, Country } from "./components/Person";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Person
        name={"Claire"}
        email={"clairedeng@gmail.com"}
        age={16}
        isMarried={true}
        friends={["Lily", "Amy", "Ella"]}
        country={Country.France}
      />
    </div>
  );
}
