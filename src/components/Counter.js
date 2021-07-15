import React, { useState } from 'react'
import "../styles/Counter.css"


function Counter(props) {

    const [value, setValue] = useState((props.initialValue == "") ? 1 : +props.initialValue);
    const maxValue = (props.maxValue === "") ? 1000 : +props.maxValue;

    function handleIncrement() {
        if (value < maxValue) {
            setValue(prev => prev + 1);
        }
    }

    function handleDecrement() {
        if (value > 0) {
            setValue(prev => prev - 1);
        }
    }

    function handleChange(e) {
        let num = +e.target.value;
        if (num <= maxValue && num >= 0) {
            setValue(num);
        }
        else if (num > maxValue) {
            setValue(maxValue);
        }
        else {
            setValue(0);
        }
    }

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
