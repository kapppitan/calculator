import React, { useState } from 'react';

function Calculator() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                let expression = inputValue
                    .replace(/\^/g, '**')
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/');
                setResult(eval(expression).toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInputValue('');
            setResult('');
        } else if (value === 'del') {
            setInputValue(inputValue.slice(0, -1));
        } else if (value === 'π') {
            setInputValue(inputValue + Math.PI);
        } else if (value === 'e') {
            setInputValue(inputValue + Math.E);
        } else if (value === 'x²') {
            setResult((parseFloat(inputValue) ** 2).toString());
        } else if (value === '²√x') {
            setResult((Math.sqrt(parseFloat(inputValue))).toString());
        } else if (value === '1/x') {
            setResult((1 / parseFloat(inputValue)).toString());
        } else if (value === '|x|') {
            setResult(Math.abs(parseFloat(inputValue)).toString());
        } else if (value === 'exp') {
            setResult((Math.exp(parseFloat(inputValue))).toString());
        } else if (value === 'mod') {
            setInputValue(inputValue + '%');
        } else if (value === 'log') {
            setResult((Math.log10(parseFloat(inputValue))).toString());
        } else if (value === 'ln') {
            setResult((Math.log(parseFloat(inputValue))).toString());
        } else if (value === 'n!') {
            const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
            setResult(factorial(parseInt(inputValue)).toString());
        } else {
            setInputValue(inputValue + value);
        }
    };

    return (
        <div className="w-full h-screen p-4 flex items-center justify-center bg-[#b9c95e]">
            <div className="w-full lg:w-1/2 border-4 rounded-lg p-10 bg-[#cac3a7] border-[#896559] gap-4 flex flex-col font-mono">
                <input
                    type="text"
                    value={inputValue}
                    readOnly
                    className="w-full h-15 p-4 bg-[#fbf5e9] border-[#896559] border-4 rounded-md outline-0"
                />
                <p className="px-5 text-2xl">= {result}</p>
                <div className="grid grid-cols-5 gap-2">
                    {['2ⁿ', 'π', 'e', 'CE', 'del', 'x²', '1/x', '|x|', 'exp', 'mod', '²√x', '(', ')', 'n!', '÷', 'xʸ', '7', '8', '9', '×', '10ˣ', '4', '5', '6', '-', 'log', '1', '2', '3', '+', 'ln', '0', '+/-', '.', '='].map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleButtonClick(btn)}
                            className={`rounded-md border-[#906252] border-4 p-2 text-lg ${
                                ['=', 'del'].includes(btn) ? 'bg-[#ffc54f]' : 'bg-[#d7c7b0] text-[#906252]'
                            }`}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calculator;