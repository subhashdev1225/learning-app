import React from 'react'

// JSX Java script XML extension
//ES6
// FAT ARROW function

const Hello = () => {
    // return (
    //     JSX Pattern
    //     <div>
    //         <h1>
    //             Greeting from JSX
    //         </h1>
    //     </div>
    //     )

    // Another way to create UI
    // create element can take as much parameter as you want
    // return React.createElement(
    //     'div',
    //     null, // optional prop with key value  
    //     React.createElement('h1',null,'New way to Create UI, Subhash')
    // )


    return React.createElement(
        'div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'New way to Create UI, Subhash')
    )


}


export default Hello;