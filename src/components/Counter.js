import React, { useEffect, useState } from 'react'
import "../styles/Counter.css"


function Counter(props) {

    const [value, setValue] = useState((props.initialValue == "") ? 1 : +props.initialValue);
    const maxValue = (props.maxValue === "") ? 1000 : (+props.maxValue < 1)? 1: +props.maxValue;

    function handleIncrement() {
        setValue(prev => prev + 1);
    }

    function handleDecrement() {
        setValue(prev => prev - 1);
    }

    function handleChange(e) {
        setValue(+e.target.value);
    }

    useEffect(() => {
        if (value > maxValue) {
            setValue(maxValue);
        }
        else if (value < 0) {
            setValue(0);
        }
    },[value])

    return (
        <div className="counter_container">
            <div className="counter">
                <button className="decrement" onClick={handleDecrement}>
                    -
                </button>
                <input className="count" type="number" onChange={handleChange} value={value} />
                <button className="increment" onClick={handleIncrement}>
                    +
                </button>
            </div>
        </div>
    )
}

export default Counter
