import { useEffect, useState } from "react";

const useCounter = (counterUpdateFn: (prev: number) => number) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("called");
    const interval = setInterval(() => {
      setCounter(counterUpdateFn);
    }, 1000);
    return () => clearInterval(interval);
  }, [counterUpdateFn]);

  return counter;
};

export default useCounter;
