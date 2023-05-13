import React,{useState} from 'react';
import '../Styles/Calculator.css';

const Calculator = () => {
    // Declaring useStates for num1, num2, result and error
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    // Validation the form
    function validation() {
        if (num1 === '') {
            setResult('');
            setError('Error: Num1 cannot be empty');
            return false;
        }
        if (num2 === '') {
            setResult('');
            setError('Error: Num2 cannot be empty');
            return false;
        }
        if(isNaN(num1) || isNaN(num2)){
            setResult('');
            setError('Error: Numbers must be numbers');
            return false;
        }
        setError('');
        return true;
    }

    // performing the operation
    function performOperation(op) {
        let res = 0;
        switch(op){
            case '+':
                res = Number.parseFloat(num1) + Number.parseFloat(num2);
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num1 / num2;
                break;
            default:
                break;
        }
        // setting result of operation
        setResult(`${res}`);
    }

    return (
        <div>
            <div className="calculator-container">
                <h1>React Calculator</h1>
                <div className='input-fiels'>
                    <input type="text" name="num1" value={num1} onChange={(e) => {setNum1(e.target.value)}} />
                    <input type="text" name="num2" value={num2} onChange={(e) => {setNum2(e.target.value)}} />
                </div>
                <div className='operator-buttons'>
                    <button onClick={() => {
                        if(validation()){
                            performOperation('+');
                        }
                    }}>+</button>
                    <button onClick={() => {
                        if(validation()){
                            performOperation('-');
                        }
                    }}>-</button>
                    <button onClick={() => {
                        if(validation()){
                            performOperation('*');
                        }
                    }}>*</button>
                    <button onClick={() => {
                        if(validation()){
                            performOperation('/');
                        }
                    }}>/</button>
                </div>
                <div className='msg'>
                    {error && <div className="error">{error}</div>}
                    {result && <div className="result">Result = {result}</div>}              
                    {result && <div className="success">Success : Your result is shown above!</div>} 
                </div>             
            </div>
        </div>
    )
}

export default Calculator;