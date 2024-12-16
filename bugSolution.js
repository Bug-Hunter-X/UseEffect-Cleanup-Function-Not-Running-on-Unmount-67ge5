```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    // This effect runs after every render, including the initial render.
    console.log('Effect running with count:', count);
    return () => {
      isMounted.current = false; // Setting the flag to prevent unnecessary cleanup
      console.log('Cleanup function running');
    };
  }, [count]);

  useEffect(() => {
    return () => {
      isMounted.current = false; // Ensure isMounted is false on unmount
    }
  }, [])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        if (isMounted.current) {
          setCount(count + 1);
        }
      }}>Click me</button>
    </div>
  );
}

export default MyComponent;
```