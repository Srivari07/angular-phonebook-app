import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent {
  @Input()
  id?:number

  @Input()
  contact?:Contact

  @Output()
  onDeleteContactById:EventEmitter<number>=new EventEmitter<number>();

  setContactId(id:number){
    this.onDeleteContactById.emit(id)
  }

}
