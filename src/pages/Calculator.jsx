import React from 'react';
import '../css/Calculator';

function Calculator() {
  return (
    <div>
      <div className="calculator">
        <div className="displaybar">
          <input type="number" placeholder="0" id="value" />
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
          <button>1</button>
          <button>2</button>
          <button>3</button>
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
