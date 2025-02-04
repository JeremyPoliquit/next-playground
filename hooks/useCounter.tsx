import React, { useState } from 'react'

const useCounter = (initialValue: number) => {

  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset};
}

export default useCounter