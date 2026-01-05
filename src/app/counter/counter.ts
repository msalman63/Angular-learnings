import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal(0);
  //function for increment
  increment(){
    this.count.update(val => val + 1);
  }
  //function for decrement
  decrement(){
    if(this.count() > 0){
      this.count.update(val => val - 1);
    }
  }
  //Reset the counter
  reset(){
    this.count.set(0);
  }
}
