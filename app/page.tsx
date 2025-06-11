"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEvaluate = () => {
    try {
      let result = eval(input);
      if (result === Infinity || result === -Infinity || isNaN(result)) {
        setInput('Error');
      } else {
        setInput(result.toString());
      }
    } catch (e) {
      setInput('Error');
    }
  };


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-xs mx-auto">
        <div className="w-full p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <div className="text-right mb-4">
            <input
              type="text"
              value={input}
              readOnly
              className="w-full p-2 text-2xl text-right bg-transparent border-b border-gray-300 dark:border-gray-700"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("7")}
            >
              7
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("8")}
            >
              8
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("9")}
            >
              9
            </button>
            <button
              className="p-4 bg-red-500 dark:bg-red-600 text-white rounded-md text-lg"
              onClick={handleClear}
            >
              C
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("4")}
            >
              4
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("5")}
            >
              5
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("6")}
            >
              6
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("+")}
            >
              +
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("1")}
            >
              1
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("2")}
            >
              2
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("3")}
            >
              3
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("-")}
            >
              -
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("0")}
            >
              0
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick(".")}
            >
              .
            </button>
            <button
              className="p-4 bg-green-500 dark:bg-green-600 text-white rounded-md text-lg"
              onClick={handleEvaluate}
            >
              =
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("/")}
            >
              ÷
            </button>
            <button
              className="p-4 bg-gray-200 dark:bg-gray-600 rounded-md text-lg"
              onClick={() => handleClick("*")}
            >
              ×
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
