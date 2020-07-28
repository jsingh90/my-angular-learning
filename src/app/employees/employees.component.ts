import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeName: string = 'Jasbeer Singh';
  employeeId: number = 3491;

  getEmployeeName() {
    return this.employeeName;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
