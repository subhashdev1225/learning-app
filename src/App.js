import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import NewJSX from './components/Hello'


function App() {
  return (
    <div className="App">

{/* reusing components by using props */}
       <Greet name={'subhash'}/>
       <Greet name={'Shikha'}/>
       <Greet name={'Golu'}/>


      {/* <Welcome/> */}
      {/* <NewJSX/> */}
    </div>
  );
}

export default App;
