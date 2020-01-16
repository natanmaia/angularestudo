import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  nome = "Natan Maia";
  
  pessoa = {
    nome: "Natan",
    sobrenome: "Maia",
    idade: 25,
    endereco: "Horizonte - CE"
  }
  
  constructor() { }

  ngOnInit() {
  }

}
