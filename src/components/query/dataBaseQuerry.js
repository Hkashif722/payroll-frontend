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

const GRADE_DETAILS = gql`
  {
    grade {
      grade_id
      grade_name
      grade_basic_salary
      grade_bonus
    }
  }
`;

const EMPLOYEE_GRADE = gql`
  {
    employee_Grade {
      transaction_id
      emp_id
      emp_dept_id
      emp_grade_id
      emp_from_date
      emp_to_date
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

const ADD_EMP_GRADE_DETAILS = gql`
  mutation AddEmpGradeDetails(
    $transaction_id: Int
    $emp_id: Int
    $emp_dept_id: Int
    $emp_grade_id: Int
    $emp_from_date: String
    $emp_to_date: String
  ) {
    addEmpGrade(
      transaction_id: $emp_id
      emp_id: $emp_id
      emp_dept_id: $emp_dept_id
      emp_grade_id: $emp_grade_id
      emp_from_date: $emp_from_date
      emp_to_date: $emp_to_date
    ) {
      transaction_id
      emp_id
      emp_dept_id
      emp_grade_id
      emp_from_date
      emp_to_date
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

const ADD_GRADE = gql`
  mutation AddGrade(
    $grade_id: Int
    $grade_name: String
    $grade_basic_salary: Int
    $grade_bonus: Int
  ) {
    addGrade(
      grade_id: $grade_id
      grade_name: $grade_name
      grade_basic_salary: $grade_basic_salary
      grade_bonus: $grade_bonus
    ) {
      grade_id
      grade_name
      grade_basic_salary
      grade_bonus
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
  GRADE_DETAILS,
  ADD_GRADE,
  EMPLOYEE_GRADE,
  ADD_EMP_GRADE_DETAILS,
};
