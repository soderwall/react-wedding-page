import React from "react";
import { Intro } from "./components/intro";
import { Vigseln } from "./components/vigseln";
import { Middag } from "./components/middag";
import { Rsvp } from "./components/rsvp";
import { Resande } from "./components/resande";
import { Footer } from "./components/footer";
import "./App.css";


function App() {
    return (
        <div className="App">
            <Intro />
            <Vigseln />
            <Middag />
            <Rsvp />
            <Resande />
            <Footer />
        </div>
    );
}

export default App;
