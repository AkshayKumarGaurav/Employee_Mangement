import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent {
  @Input() employees: any[];
  displayedEmployees: any;

  constructor(){
    this.displayedEmployees=this.getEmployeeWithHighestSalary();
  }

  getEmployeeWithHighestSalary(): any{
    if(this.employees && this.employees.length>0){
      return this.employees.reduce((max,employee)=>
      employee.salary>max.salary?employee:max)
    };
  }
  return null;
}
