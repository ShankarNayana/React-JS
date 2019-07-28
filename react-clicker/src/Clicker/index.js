import React from 'react';
import './style.css';
class Result extends React.Component {
    state = {
        value: 0
    }
    incrementCount = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    decrementCount = () => {
        this.setState({
            value: this.state.value - 1
        })
    }

    resetCount = () => {
        this.setState({
            value: 0
        })
    }


    render() {
        return (
            <>
                <div className='container'>
                    <div className='result'><p>{this.state.value}</p></div>
                    <div className='button-container'>
                        <button className='plus' onClick={() => this.incrementCount()}>+</button>
                        <button className='reset' onClick={() => this.resetCount()}>@</button>
                        <button className='minus' onClick={() => this.decrementCount()}>-</button>
                    </div>
                </div>
            </>

        )
    }
}

export default Result;