import React from 'react';
import '../css/Calculator';

function Calculator() {
  const [value, setvalue] = React.useState('');
  return (
    <div className="Calculator_ak">
      <div className="calculator">
        <div className="displaybar">
          <input type="text" placeholder="0" id="value" value={value} />
        </div>
        <div className="button">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>/</button>
        </div>
        <div className="button">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>*</button>
        </div>
        <div className="button">
          <button onClick={() => setvalue(value + '1')}>1</button>
          <button onClick={() => setvalue(value + '2')}>2</button>
          <button onClick={() => setvalue(value + '3')}>3</button>
          <button>-</button>
        </div>
        <div className="button">
          <button>0</button>
          <button>.</button>
          <button>=</button>
          <button>+</button>
        </div>
        <div className="button">
          <button>C</button>
          <button>AC</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
