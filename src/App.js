import './App.css';
import Counter from "./components/counter";
import Cards from './components/cards';
import React from 'react';
function App() {
  return(
    <>
      <Counter/>
      <Cards title = {"Hello"}/>
      <Cards title = {"Fatma"}/>
      <Cards title = {"Elsayed"}/>
    </>
  );
}

export default App;
