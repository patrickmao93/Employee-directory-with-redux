import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { fetchEmployees } from "../actions/index";

class EmployeeList extends React.Component {
  renderEmployees = () => {
    const employeeList = this.props.displayedEmployees.map(employee => (
      <Card key={employee.uuid} employee={employee} />
    ));
    return employeeList;
  };

  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    return <div className="employee-list">{this.renderEmployees()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    displayedEmployees: state.displayedEmployees
  };
};

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(EmployeeList);
