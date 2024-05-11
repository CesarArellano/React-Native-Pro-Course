import { useState } from "react";

interface Options {
  initValue?: number;
}

export const useCounter = ({ initValue = 0 }: Options) => {
  const [count, setCount] = useState<number>(initValue);

  const increaseBy = (value: number): void => {
    const newValue = count + value;
    if (newValue < 0) return;
    setCount(newValue);
  };

  return {
    count,
    increaseBy,
  };
};
