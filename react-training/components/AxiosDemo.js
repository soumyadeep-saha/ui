import { useEffect, useState } from "react";

const RestApp = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // "fetch" is an in-built tool like axios to make backend API call
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data && // "&&" will do a null check and if not null execute the next statement
        data.map((item) => {
          return <p key={item.name}>{item.name}</p>;
        })}
    </div>
  );
};
export default RestApp;
