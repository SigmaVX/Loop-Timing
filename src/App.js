import React, { useState, useEffect } from "react";
import "./styles.css";

const ARRAY_LENGTH = 10000;
const randomArray = [];
for (let i = 0; i < ARRAY_LENGTH; i++) {
  randomArray.push(i);
}
const myNumber = Math.floor(Math.random() * ARRAY_LENGTH);
console.log("My Number: ", myNumber);

export default function App() {
  const [loopTime, setLoopTime] = useState("");
  const [forEachTime, setForEachTime] = useState("");
  const [findTime, setFindTime] = useState("");

  const findWithForLoop = (myArray, myNumber) => {
    let start = window.performance.now();
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] === myNumber) {
        console.log("For Loop Found At: ", i);
        break;
      }
    }
    let end = window.performance.now();
    let time = end - start;
    setLoopTime(time);
  };

  const findWithForEach = (myArray, myNumber) => {
    let start = window.performance.now();
    myArray.forEach((num, index) => {
      if (num === myNumber) {
        console.log("For Each Found At: ", index);
      }
    });
    let end = window.performance.now();
    let time = end - start;
    setForEachTime(time);
  };

  const findWithFind = (myArray, myNumber) => {
    let start = window.performance.now();
    myArray.find((num, index) => {
      if (num === myNumber) {
        console.log("Find Found At: ", index);
        return num;
      }
    });
    let end = window.performance.now();
    let time = end - start;
    setFindTime(time);
  };

  useEffect(() => {
    runLoops();
  }, []);

  const runLoops = () => {
    findWithForLoop(randomArray, myNumber);
    findWithForEach(randomArray, myNumber);
    findWithFind(randomArray, myNumber);
  };

  return (
    <div className="App">
      <h1>Loop Times</h1>
      <button onClick={runLoops}>Run Loops</button>
      <h2>For Loop</h2>
      <p>{parseFloat(loopTime).toFixed(4)} ms</p>
      <h2>For Each</h2>
      <p>{parseFloat(forEachTime).toFixed(4)} ms</p>
      <h2>JS Find</h2>
      <p>{parseFloat(findTime).toFixed(4)} ms</p>
    </div>
  );
}
