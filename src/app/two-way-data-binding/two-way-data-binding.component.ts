import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: string = "312";
  name2: string = "4354";

  client = {
    firsname: "natan",
    lastname: "maia",
    address: "horizonte",
    age: 25
  };

  constructor() { }

  ngOnInit() {
  }

}
