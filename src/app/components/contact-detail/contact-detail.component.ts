import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
  @Input()
  id?:number

  @Input()
  contact?:Contact

  @Output()
  onDeleteContact:EventEmitter<Contact>=new EventEmitter<Contact>();

  constructor(private contactService:ContactService){

  }
  ngOnInit(): void {
    this.contactService.getContactById(2).subscribe(data=>this.contact?.id)
  }
  deleteContact(contact:Contact){
    this.onDeleteContact.emit(contact)
  }

}
