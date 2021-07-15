import React from 'react'
import "../styles/Form.css"

function Form(props) {

    const {
        handleSubmit,
        handleInitialValue,
        handleMaxValue,
        initialValue,
        maxValue
    } = props;

    return (
        <>
            <h1 className="title">Submit the Form to open Counter</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form_control">
                    <label>Initial Value</label>
                    <input type="number" onChange={handleInitialValue} value={initialValue} />
                </div>
                <div className="form_control">
                    <label>Max Value</label>
                    <input type="number" onChange={handleMaxValue} value={maxValue} />
                </div>
                <div className="form_control">
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form
