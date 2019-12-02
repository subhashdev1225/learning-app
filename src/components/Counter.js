import React, { Component } from 'react'



class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // })

       this.setState( prevState =>({
        count : prevState.count +1
       }))
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        },
        ()=>{
            console.log('Callback value  :',this.state.count);
        }
        )
    }



    render() {
        return (
            <div>

                <button
                    onClick={() => this.decrement()}> - </button>
                <div>
                    Current Counter value is :  {this.state.count}

                </div>

                <button
                    onClick={() => this.increment()}> + </button>



            </div>
        )
    }
}

export default Counter
