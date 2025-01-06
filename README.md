# React 18+ useEffect Cleanup and Infinite Loops

This repository demonstrates a subtle bug in React 18+ related to the `useEffect` hook and its cleanup function.  Improper use of state variables within the dependency array of `useEffect` can lead to infinite re-renders.

## The Bug
The `bug.js` file contains a React component that increments a counter.  The `useEffect` hook logs messages on mount and unmount. However, the dependency array includes `count`.  Because the `useEffect`'s return function (cleanup) also implicitly depends on `count`, any change to count triggers a re-render which causes `useEffect` to rerun and this leads to an infinite loop. 

## The Solution
The `bugSolution.js` file shows the corrected code.  The solution removes `count` from the dependency array of `useEffect`, solving the infinite loop problem. If the cleanup function needs to perform actions dependent on the state, use the state value from within the cleanup function rather than using it in the dependency array.
