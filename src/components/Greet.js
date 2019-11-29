import React from 'react'


//functional component in ES6
// function Greet(props) {
//     return <h1>hello {props.name}</h1>
// }


const Greet = (props) => {
    return <h1>Welcome to React {props.name}.</h1>
}
export default Greet;