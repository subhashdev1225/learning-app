import React, { Component } from 'react'
 
class ClassClick extends Component {


    clickHandler(){
        console.log("Class component called");
    }
    render() {
        return (

            <div>
                <button onClick={this.clickHandler}> Click Class component</button>
            </div>
        )
    }
}

export default ClassClick
