import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "meu Botão";
  i = 0;
  

  constructor() { }

  spinnerMode = "determinate";
  btnEnable = true;
  selectDisabled = false;
  selectedOption = 1;
  inputName = "Natan";

  ngOnInit() {
  }

  save(){
    console.log("teste");
  }

  incrementar(){
    this.i++;
    this.buttonName = "Botão " + this.i;
  }

  desabilitar(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 3000);
  }

  cbChange(event){
    console.log(event.checked);
    this.selectDisabled = event.checked;
  }

  selectionChange(event){
    console.log(event);
    this.selectedOption = event.value;
  }
  
}
