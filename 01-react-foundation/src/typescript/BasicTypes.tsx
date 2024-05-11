export const BasicTypes = () => {
  const today = new Date();
  const age: number = 24;
  const powers: string[] = ["React", "React Native", "Flutter"];
  return (
    <>
      <h3>Basic Types</h3>
      <p>{today.toString()}</p>
      <p>{age} years old</p>
      <p>{powers.join(", ")}</p>
    </>
  );
};
