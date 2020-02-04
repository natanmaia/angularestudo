import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "natan", role: "admin", lastLogin: new Date('2/4/2020') },
    { login: "bob", role: "user", lastLogin: new Date('3/5/2020') },
    { login: "lia", role: "admin", lastLogin: new Date('4/6/2020') },
    { login: "robin", role: "user", lastLogin: new Date('5/7/2020') }
  ]

  constructor() { }

  ngOnInit() {
  }

}
