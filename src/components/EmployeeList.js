import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { fetchEmployees } from "../actions/index";

class EmployeeList extends React.Component {
  renderEmployees = () => {
    const employeeList = this.props.employees.map(employee => (
      <Card key={employee.uuid} employee={employee} />
    ));
    return employeeList;
  };

  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    console.log(this.props.employees);
    return <div className="employee-list">{this.renderEmployees()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees
  };
};

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(EmployeeList);
