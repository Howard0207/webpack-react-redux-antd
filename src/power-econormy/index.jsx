import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      Count:
      {count}
      <Link to="/">power-econormy</Link>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
      <button type="button" onClick={() => setCount((prevCount) => prevCount - 1)}>
        -
      </button>
      <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
        +
      </button>
    </>
  );
}
