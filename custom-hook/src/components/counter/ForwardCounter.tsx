import Card from "./Card";
import { useCallback } from "react";
import useCounter from "../../hooks/use-counter";

const ForwardCounter = () => {
  const updated = useCallback((prev: number) => prev + 1, []);
  const counter = useCounter(updated);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
