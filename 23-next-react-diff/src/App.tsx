import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

const getUsers = async (): Promise<User[]> => {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(API_URL);
  const json = (await res.json()) as User[];
  return json;
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default App;
