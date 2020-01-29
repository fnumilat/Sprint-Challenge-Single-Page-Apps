import React from "react";
import WelcomePage from "./components/WelcomePage"
import { Route } from "react-router-dom";
import CharacterCard from "./components/CharacterCard"
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";






export default function App() {
  return (
    <main>
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/" component={Header}/>
      <Route exact path="/" component={CharacterList}/>
      <Route exact path="/character/:id" component={CharacterCard}/>
    </main>
  );
}
