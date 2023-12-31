import { HttpClient } from '@angular/common/http';
import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent implements OnInit {
  @Input()
  id?:number

  @Input()
  contact?:Contact

  @Output()
  onDeleteContact:EventEmitter<Contact>=new EventEmitter<Contact>();

  constructor(private contactService:ContactService){

  }
  ngOnInit(): void {
    this.contactService.getContactById(9).subscribe(data=>this.contact?.id)
  }
  deleteContact(contact:Contact){
    this.onDeleteContact.emit(contact)
  }

}
