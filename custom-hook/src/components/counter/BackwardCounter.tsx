import { useCallback } from "react";
import useCounter from "../../hooks/use-counter";
import Card from "./Card";

const BackwardCounter = () => {
  const updated = useCallback((prev: number) => prev - 1, []);

  const counter = useCounter(updated);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
