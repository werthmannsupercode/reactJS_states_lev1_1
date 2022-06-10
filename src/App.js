import { useState } from 'react';
import './App.css';

function App() {

  const [answer, setAnswer] = useState(true)
  return (
    <div className="container">
      <div className="innerContainer">
        <p>Why ist React great?</p>
        <button onClick={() => setAnswer(!answer)}>+</button>
      </div>
      <p className="answerP" style={answer ? { display: 'none' } : { display: 'block' }} > Fast Learning Curve</p>
    </div >
  );
}

export default App;
