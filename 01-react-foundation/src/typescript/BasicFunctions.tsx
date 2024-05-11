export const BasicFunctions = () => {
  const addTwoNumber = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Basic Functions</h3>
      <span>El resultado de sumar: {addTwoNumber(4, 5)} </span>
    </>
  );
};
