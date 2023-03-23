import React from "react";
import Hero from "./component/Hero";
import Navigation from "./component/Navigation";
import New from "./component/New";
import Popular from "./component/Popular";

function App() {
  return (
    <div className="lg:px-48 md:px-0">
      <Navigation />
      <div className="flex flex-col md:flex-row">
        <Hero />
        <New />
      </div>
      <Popular />
    </div>
  );
}

export default App;
