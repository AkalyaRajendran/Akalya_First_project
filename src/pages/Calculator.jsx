import React from 'react';
import '../css/Calculator';

function Calculator() {
  const [value, setvalue] = React.useState('');
  const clearfn = () => {
    let valuearray = value.split('');
    // if (valuearray.length > 0) {
    //   valuearray.pop();
    //   setvalue(valuearray.join(''));
    // } else {
    //   alert('Nothing to Delete');
    // }

    valuearray.length > 0
      ? setvalue(valuearray.splice(0, valuearray.length - 1).join(''))
      : alert('Nothing to Delete');
  };

  return (
    <div className="Calculator_ak">
      <div className="calculator">
        <div className="displaybar">
          <input type="text" placeholder="0" id="value" value={value} />
        </div>
        <div className="button">
          <button onClick={() => setvalue(value + '7')}>7</button>
          <button onClick={() => setvalue(value + '8')}>8</button>
          <button onClick={() => setvalue(value + '9')}>9</button>
          <button onClick={() => setvalue(value + '/')}>/</button>
        </div>
        <div className="button">
          <button onClick={() => setvalue(value + '4')}>4</button>
          <button onClick={() => setvalue(value + '5')}>5</button>
          <button onClick={() => setvalue(value + '6')}>6</button>
          <button onClick={() => setvalue(value + '*')}>*</button>
        </div>
        <div className="button">
          <button onClick={() => setvalue(value + '1')}>1</button>
          <button onClick={() => setvalue(value + '2')}>2</button>
          <button onClick={() => setvalue(value + '3')}>3</button>
          <button onClick={() => setvalue(value + '3')}>-</button>
        </div>
        <div className="button">
          <button onClick={() => setvalue(value + '0')}>0</button>
          <button onClick={() => setvalue(value + '.')}>.</button>
          <button onClick={() => setvalue(String(eval(value)))}>=</button>
          <button onClick={() => setvalue(value + '+')}>+</button>
        </div>
        <div className="button">
          <button onClick={() => clearfn('')}>C</button>
          <button onClick={() => setvalue('')}>AC</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
