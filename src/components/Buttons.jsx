import React, {useState} from 'react';
import './buttons.css'

function Buttons() {  
    const [data, setData] = useState("");
    return (
        <div className="button-wrapper">
            <div className="row0">
                <input value = {data}></input>
            </div>
            <div className="row1">
                <button onClick = {() => setData(data +'7')} value = {7}>7</button>
                <button onClick = {() => setData(data +'8')} value = {8}>8</button>
                <button onClick = {() => setData(data +'9')} value = {9}>9</button>
                <button onClick = {(e) => setData(data + e.target.value)} value = {'/'} className = 'operator'>/</button>
            </div>
             <div className="row2">
                <button onClick = {() => setData(data +'4')} value = {4}>4</button>
                <button onClick = {() => setData(data +'5')} value = {5}>5</button>
                <button onClick = {() => setData(data +'6')} value = {6}>6</button>
                <button onClick = {(e) => setData(data + e.target.value)} value = {'*'} className = 'operator'>*</button>
            </div>
             <div className="row3">
                <button onClick = {() => setData(data +'1')} value = {1}>1</button>
                <button onClick = {() => setData(data +'2')} value = {2}>2</button>
                <button onClick = {() => setData(data +'3')} value = {3}>3</button>
                <button onClick = {(e) => setData(data + e.target.value)} value = {'+'} className = 'operator'>+</button>
            </div>
             <div className="row4">
                <button onClick = {() => setData(data +'.')} value = {'.'}>.</button>
                <button onClick = {() => setData(data +'0')} value = {0}>0</button>
                <button onClick={(e) => {
            try {
              setData(
                String(eval(data)).length > 3 &&
                  String(eval(data)).includes(".")
                  ? String(eval(data).toFixed(4))
                  : String(eval(data))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="=" className = 'equal-btn'>=</button>
                <button onClick = {(e) => setData(data + e.target.value)} value = {'-'} className = 'operator'>-</button>
            </div>
            <div className="row5">
                <button className = 'clear-btn' onClick = {() => setData(data.substr(0, data.length - 1))}>x</button>
                <button className = 'clear-btn' onClick = {() => setData('')}>CLEAR</button>
            </div>
        </div>
    )
}

export default Buttons;