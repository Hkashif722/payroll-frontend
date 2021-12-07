import { Routes, Route } from "react-router-dom";
import Employee from "./components/componentList/Employee";
import Drawer from "./components/UseDrawer";
import Login from "./components/componentList/Login";
import SignUpLoginIn from "./components/SignUpLoginIn";
import Home from "./components/componentList/Home";
import Company from "./components/componentList/Company";
import Department from "./components/componentList/Department";
import Grade from "./components/componentList/Grade";
import EmployeeGrade from "./components/componentList/EmployeeGrade";
import EmpSalary from "./components/componentList/EmpSalary";

function App() {
  return (
    <div className=" max-w-full overflow-hidden">
      <header className="App-header ">
        <div className=" flex bg-gray-200">
          <Routes>
            <Route path="/" element={<SignUpLoginIn />} />
          </Routes>
          <Drawer />
          <main className=" ml-20 mx-10  mt-20 ">
            <div className="pr-10">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/emp-salary" element={<EmpSalary />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/emp-grade" element={<EmployeeGrade />} />
                <Route path="/department" element={<Department />} />
                <Route path="/grade" element={<Grade />} />
              </Routes>
            </div>
          </main>
        </div>
      </header>
    </div>
  );
}

export default App;
