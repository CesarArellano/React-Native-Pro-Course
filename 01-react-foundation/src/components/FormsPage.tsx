import { useForm } from "react-hook-form";

type FormsInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register, handleSubmit, watch } = useForm<FormsInputs>({
    defaultValues: {
      email: "raywayday@gmail.com",
      password: "ABC123",
    },
  });

  const onSubmit = (myForm: FormsInputs) => {
    console.log({ myForm });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Forms Page</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" placeholder="Email" {...register("email")} />
          <input type="text" placeholder="Password" {...register("password")} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <pre>{JSON.stringify(watch("email"), null, 2)}</pre>
    </>
  );
};
