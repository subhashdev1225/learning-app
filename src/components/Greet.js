import React from 'react'


//functional component in ES6
// function Greet(props) {
//     return <h1>hello {props.name}</h1>
// }


const Greet = (props) => {
    const {name, heroName} = props
    return (
        <div>
            <h1>Welcome to React {name} a.k.a {heroName}</h1>
            {props.children}
        </div>
    )
}
export default Greet;