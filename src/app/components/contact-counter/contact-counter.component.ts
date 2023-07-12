import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contact-counter',
  templateUrl: './contact-counter.component.html',
  styleUrls: ['./contact-counter.component.css']
})
export class ContactCounterComponent {
  @Input()
  all?:number;

  @Input()
  male?:number

  @Input()
  female?:number

  @Output()
  onRadioChange:EventEmitter<string>=new EventEmitter<string>();

  setGenderData(gender:string){
    this.onRadioChange.emit(gender)
  }
}
