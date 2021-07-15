import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';
import Counter from './components/Counter';

function App() {

  const [initialValue, setInitialValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);

  function handleInitialValue(e) {
    setInitialValue(e.target.value)
  }

  function handleMaxValue(e) {
    setMaxValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmited(true);
  }

  return (
    <div className="App">
      {(isSubmited) ?
        <Counter initialValue={initialValue} maxValue={maxValue} />
        :
        <Form
          handleSubmit={handleSubmit}
          handleMaxValue={handleMaxValue}
          handleInitialValue={handleInitialValue}
          initialValue={initialValue}
          maxValue={maxValue}
        />
      }
    </div>
  );
}

export default App;
