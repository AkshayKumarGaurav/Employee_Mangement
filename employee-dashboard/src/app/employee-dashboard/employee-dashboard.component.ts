import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent {
  @Input() employees: Array<{ name: string; salary: number; designation: string }> = [];
  highestPaidEmployee: { name: string; salary: number; designation: string };

  constructor() {
    this.updateHighestPaidEmployee();
  }

  addEmployee(employee: { name: string; salary: number; designation: string }) {
    this.employees.push(employee);
    if (employee.salary > this.highestPaidEmployee.salary) {
      this.highestPaidEmployee = { ...employee };
    }
  }

  updateHighestPaidEmployee() {
    if (this.employees.length > 0) {
      this.highestPaidEmployee = this.employees.reduce((prev, current) =>
        prev.salary > current.salary ? prev : current
      );
    }
  }
}
