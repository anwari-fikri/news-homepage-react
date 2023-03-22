import React from "react";
import Hero from "./component/Hero";
import Navigation from "./component/Navigation";
import New from "./component/New";
import Popular from "./component/Popular";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <New />
      <Popular />
    </>
  );
}

export default App;
