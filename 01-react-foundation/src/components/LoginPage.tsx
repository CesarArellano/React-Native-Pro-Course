import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, [logout]);

  if (authStatus === "checking") {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h3>Login Page</h3>
      {authStatus === "authenticated" ? (
        <div>Autenthicated as: {JSON.stringify(user, null, 2)} </div>
      ) : (
        <div>Not authenticated</div>
      )}
      {authStatus === "authenticated" ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("raywayday@gmail.com", "1234")}>
          Login
        </button>
      )}
    </div>
  );
};
