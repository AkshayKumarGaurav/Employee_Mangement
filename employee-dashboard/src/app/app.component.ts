import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees = [
    {"name": "John", "salary": 3000, "designation": "developer"},
    {"name": "Emma", "salary": 4000, "designation": "manager"},
    {"name": "Kelly", "salary": 3500, "designation": "tester"}
  ];

  addNewEmployee() {
    const newEmployee = {"name": "Michael", "salary": 4500, "designation": "designer"};
    this.employees.push(newEmployee);
  }
}
