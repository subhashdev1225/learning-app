import React from 'react'

function FunctionClick() {


    function clickHandler() {
        console.log("Click handler called");

    }

    return (
        <div>
            <button onClick={clickHandler}> Click </button>
        </div>
    )
}

export default FunctionClick
