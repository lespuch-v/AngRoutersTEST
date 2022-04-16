import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonachi',
  templateUrl: './fibonachi.component.html',
  styleUrls: ['./fibonachi.component.css']
})
export class FibonachiComponent implements OnInit {
  fibNumber: number

  constructor() {
    this.fibNumber = 0
   }


  fibCalculate($event:any){
    console.log($event.target.value)
    let item = Number($event.target.value)
    let num1 = 0
    let num2 = 1
    let nextStep 
    for(let i = 0; i < item; i++){
      nextStep = num1 + num2
      num1 = num2
      num2 = nextStep
    }
    this.fibNumber = num1
    console.log(this.fibNumber)
  }

  ngOnInit(): void {
  }

}
