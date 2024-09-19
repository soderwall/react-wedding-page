import React from "react";
import { Intro } from "./components/intro";
import { Vigseln } from "./components/vigseln";
import { Middag } from "./components/middag";
import { Rsvp } from "./components/rsvp";
import { Resande } from "./components/resande";
import { Toastmasters } from "./components/toastmaster";
import { Dresscode } from "./components/dresscode";
import { Footer } from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Intro />
      <Vigseln />
      <Middag />
      <Rsvp />
      <Toastmasters />
      <Dresscode />
      <Resande />
      <Footer />
    </div>
  );
}

export default App;
