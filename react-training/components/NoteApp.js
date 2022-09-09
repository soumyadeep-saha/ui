import { useEffect, useState } from "react";

function NoteApp() {
  const [users, setUsers] = useState([]);
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, { fname, email }]); //"...users" will fetch all the previous data and the next parameter will add new value to the state user
    setEmail("");
    setFname("");
  };

  const deleteUser = (fname) => {
    setUsers(users.filter((uname) => uname.fname !== fname));
  };
  //componentDidMount
  useEffect(() => {
    // useEffect is a lifecycle method, here it represents componentDidMount
    const userdata = JSON.parse(localStorage.getItem("users"));
    if (userdata) {
      setUsers(userdata);
    }
  }, []);
  //componentDidUpdate
  useEffect(() => {
    // useEffect is a lifecycle method, here it represents componentDidUpdate
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      {users.map((user) => (
        <div>
          <h4>{user.fname}</h4>
          <h4>{user.email}</h4>
          <button onClick={(e) => deleteUser(user.fname)}>X</button>
        </div>
      ))}
      <form onSubmit={addUser}>
        User:
        <input
          type="text"
          name="uname"
          value={fname}
          onChange={(e) => setFname(e.target.value)} // onChange will get executed on any change in state
        />
        Email:
        <input
          type="text"
          name="uname"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default NoteApp;
