import { useQuery } from "@tanstack/react-query";

interface User {
  id: number;
  email: string;
  name: string; 
}

const UserList = () => {
  const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });

  if (isLoading) return <h1>loading...</h1>;
  if (error) return <h1>Error loading users</h1>;

  return (
    <div className="grid grid-cols-3 gap-3 flex-wrap p-4">
      {data?.map((user) => (
        <div key={user.id} className="border p-3 rounded">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;