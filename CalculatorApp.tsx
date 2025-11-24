import React, { useState } from 'react';

const CalculatorApp: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [prevVal, setPrevVal] = useState<number | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [newNum, setNewNum] = useState(true);

  const handleNum = (num: string) => {
    if (newNum) {
        setDisplay(num);
        setNewNum(false);
    } else {
        setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOp = (operation: string) => {
    setPrevVal(parseFloat(display));
    setOp(operation);
    setNewNum(true);
  };

  const calculate = () => {
    if (op && prevVal !== null) {
        const current = parseFloat(display);
        let result = 0;
        switch(op) {
            case '+': result = prevVal + current; break;
            case '-': result = prevVal - current; break;
            case '×': result = prevVal * current; break;
            case '÷': result = prevVal / current; break;
        }
        setDisplay(result.toString());
        setOp(null);
        setPrevVal(null);
        setNewNum(true);
    }
  };

  const clear = () => {
      setDisplay('0');
      setPrevVal(null);
      setOp(null);
      setNewNum(true);
  }

  const btnClass = "h-16 w-16 rounded-full text-3xl font-medium flex items-center justify-center transition-all active:opacity-70 select-none";
  const grayBtn = "bg-[#a5a5a5] text-black";
  const darkBtn = "bg-[#333333] text-white";
  const orangeBtn = "bg-[#ff9f0a] text-white";

  return (
    <div className="h-full bg-black text-white flex flex-col justify-end pb-8 px-4">
       <div className="flex-1 flex items-end justify-end pb-4 px-2">
           <div className="text-7xl font-light tracking-tight break-all leading-none">{display}</div>
       </div>
       
       <div className="grid grid-cols-4 gap-3">
           <button className={btnClass + " " + grayBtn} onClick={clear}>AC</button>
           <button className={btnClass + " " + grayBtn} onClick={() => setDisplay((parseFloat(display) * -1).toString())}>+/-</button>
           <button className={btnClass + " " + grayBtn} onClick={() => setDisplay((parseFloat(display) / 100).toString())}>%</button>
           <button className={btnClass + " " + orangeBtn} onClick={() => handleOp('÷')}>÷</button>

           <button className={btnClass + " " + darkBtn} onClick={() => handleNum('7')}>7</button>
           <button className={btnClass + " " + darkBtn} onClick={() => handleNum('8')}>8</button>
           <button className={btnClass + " " + darkBtn} onClick={() => handleNum('9')}>9</button>
           <button className={btnClass + " " + orangeBtn} onClick={() => handleOp('×')}>×</button>

           <button className={btnClass + " " + darkBtn} onClick={() => handleNum('4')}>4</button>
           <button className={btnClass + " " + darkBtn} onClick={() => handleNum('5')}>5</button>
           <button className={btnClass + " " + darkBtn} onClick={() => handleNum('6')}>6</button>
           <button className={btnClass + " " + orangeBtn} onClick={() => handleOp('-')}>-</button>

           <button className={btnClass + " " + darkBtn} onClick={() => handleNum('1')}>1</button>
           <button className={btnClass + " " + darkBtn} onClick={() => handleNum('2')}>2</button>
           <button className={btnClass + " " + darkBtn} onClick={() => handleNum('3')}>3</button>
           <button className={btnClass + " " + orangeBtn} onClick={() => handleOp('+')}>+</button>

           <button className={`${btnClass} ${darkBtn} col-span-2 w-auto pl-7 justify-start rounded-[40px]`} onClick={() => handleNum('0')}>0</button>
           <button className={btnClass + " " + darkBtn} onClick={() => handleNum('.')}>.</button>
           <button className={btnClass + " " + orangeBtn} onClick={calculate}>=</button>
       </div>
    </div>
  );
};

export default CalculatorApp;