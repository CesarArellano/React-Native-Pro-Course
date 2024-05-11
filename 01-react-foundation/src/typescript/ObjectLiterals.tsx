interface Person {
  fullName: string;
  age: number;
  address: {
    country: string;
    houseNo: number;
  };
}
export const ObjectLiterals = () => {
  const person: Person = {
    fullName: "César Arellano",
    age: 24,
    address: {
      country: "México",
      houseNo: 615,
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>
      <p>FullName: {person.fullName}</p>
      <p>Age: {person.age}</p>
      <p>Address:</p>
      <pre>{JSON.stringify(person.address, null, 2)}</pre>
    </>
  );
};
