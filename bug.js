```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop in React 18+ if the component re-renders
    // and the return value of this useEffect depends on the count.
    console.log('useEffect called');
    return () => {
      console.log('useEffect cleanup');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```