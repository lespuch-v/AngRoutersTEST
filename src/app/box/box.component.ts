import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent implements OnInit {
  userInput: number[];

  constructor() {
    this.userInput = [];
  }

  onHandleChange($event: any) {
    console.log($event.target.value);
    for (let i = 0; i < Number($event.target.value); i++) {
      this.userInput.push($event.target.value);
    }
  }
  clear($event:any){
    $event.target.value = ""
  }

  ngOnInit(): void {}
}

// Generate a boxes based on the user input
// if user selects 10 than generate a ten boxes.
