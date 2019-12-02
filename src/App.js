import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import NewJSX from './components/Hello'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'

function App() {
  return (
    <div className="App">

{/* <Counter/> */}

<FunctionClick/>
<ClassClick/>


{/* <Greet name={'Shikha'} heroName={'DEV'}></Greet> */}

      {/* <Greet name={'subhash'} heroName={'DEV'}>
        <p>
          This is the begining
         </p>
      </Greet>
      <Greet name={'Shikha'} heroName={'DEV'}>
        <button>Action</button>
      </Greet>
      <Greet name={'Golu'} heroName={'JUN DEV'} /> */}


      {/* <Welcome/> */}
      {/* <NewJSX/> */}
    </div>
  );
}

export default App;
