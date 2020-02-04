import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Ana",
    "John",
    "Mark",
    "Mariel"
  ];

  cities = [
    {name: "São Paulo", state: "SP"},
    {name: "Niteroi", state: "RJ"},
    {name: "Brumadinho", state: "MG"},
    {name: "Horizonte", state: "CE"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
