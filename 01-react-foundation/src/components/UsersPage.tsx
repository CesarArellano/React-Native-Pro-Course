import { useUsers } from "../hooks/useUsers";
import { User } from "../interfaces";

export const UsersPage = () => {
  const { users, nextPage, prevPage } = useUsers();

  return (
    <>
      <h3>Users:</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map((user) => UserRow({ user }))}</tbody>
      </table>
      <div>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

interface UserRowProps {
  user: User;
}

export const UserRow = ({ user }: UserRowProps) => {
  const { id, first_name, last_name, avatar, email } = user;
  return (
    <tr key={id}>
      <td>
        <img style={{ width: "75px" }} src={avatar} alt="Avatar Image"></img>
      </td>
      <td>{`${first_name} ${last_name}`}</td>
      <td>{email}</td>
    </tr>
  );
};
