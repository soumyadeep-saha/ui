import { createContext, useContext } from "react";

const AppContext = createContext();

const [employee, setEmployee] = [
  { id: 1, uname: "a", email: "aa.com", salary: 100 },
];
function AppMain() {
  return (
    <div>
      <p>This is AppMain</p>
      <AppContext.Provider value={employee}>
        <Employee />
      </AppContext.Provider>
    </div>
  );
}

function Employee() {
  const emp = useContext(AppContext);
  return (
    <div>
      <p>This is Employee</p>
      <p>{emp.id}</p>
      <p>{emp.uname}</p>
      <Salary />
    </div>
  );
}

function Salary() {
  const sal = useContext(AppContext);
  return (
    <div>
      <p>This is Salary</p>
      <p>{sal.salary}</p>
    </div>
  );
}

export default AppMain;
