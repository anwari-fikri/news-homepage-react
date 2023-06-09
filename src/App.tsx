import React from "react";
import Hero from "./component/Hero";
import Navigation from "./component/Navigation";
import New from "./component/New";
import Popular from "./component/Popular";

function App() {
  return (
    <div className="bg-off-white lg:px-40 md:px-0">
      <Navigation />
      <main>
        <div className="flex flex-col md:flex-row ">
          <Hero />
          <New />
        </div>
        <Popular />
      </main>
    </div>
  );
}

export default App;
