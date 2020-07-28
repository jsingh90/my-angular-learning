import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  disableAddNewResourceBttn: boolean = false;
  resourceName: String = "";

  constructor() { 
    setTimeout(() => this.disableAddNewResourceBttn=true,3000);
  }

  addNewResource() {
    console.log('Button Clicked');
  }

  resouceNameValue(event: Event) {
    //console.log(event);
    this.resourceName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
