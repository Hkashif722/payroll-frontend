import { gql } from "@apollo/client";

const ALL_EMPLOYEE = gql`
  query Allemployee {
    employee {
      emp_id
      emp_name
      emp_dob
      emp_doj
      emp_pincode
      emp_city
      emp_mobile_no
      emp_state
      emp_mail_id
    }
    books {
      title
    }
  }
`;

const DEPARTMENT = gql`
  {
    department {
      dept_id
      dept_name
    }
  }
`;

const ADD_DEPARTMENT = gql`
  mutation AddDepartment($dept_id: Int, $dept_name: String) {
    addDepartment(dept_id: $dept_id, dept_name: $dept_name) {
      dept_id
      dept_name
    }
  }
`;

const DELETE_DEPARTMENT = gql`
  mutation DeleteDepartment($dept_id: Int) {
    deleteDepartment(dept_id: $dept_id) {
      dept_id
    }
  }
`;

const Add_Employee = gql`
  mutation AddEmployee(
    $emp_id: Int
    $emp_name: String
    $emp_dob: String
    $emp_doj: String
    $emp_city: String
    $emp_pincode: String
    $emp_mobile_no: Int
    $emp_state: String
    $emp_mail_id: String
  ) {
    addEmployee(
      emp_id: $emp_id
      emp_name: $emp_name
      emp_dob: $emp_dob
      emp_doj: $emp_doj
      emp_city: $emp_city
      emp_pincode: $emp_pincode
      emp_mobile_no: $emp_mobile_no
      emp_state: $emp_state
      emp_mail_id: $emp_mail_id
    ) {
      emp_id
      emp_name
      emp_dob
      emp_doj
      emp_pincode
      emp_city
      emp_mobile_no
      emp_state
      emp_mail_id
    }
  }
`;

export {
  ALL_EMPLOYEE,
  Add_Employee,
  DEPARTMENT,
  ADD_DEPARTMENT,
  DELETE_DEPARTMENT,
};
