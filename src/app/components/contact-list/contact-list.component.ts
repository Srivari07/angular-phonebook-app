import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts?:Contact[]=[]

  ngOnInit(): void {
    this.contacts?.push(new Contact(1,"Srivari","Chettiyar","Male","07-Sept-2001","srivari@gmail.com","9870290210","Mumbai","Maharashtra","India","./assets/images/sri.jpg"))
    this.contacts?.push(new Contact(2,"Akshay","Srikanth","Male","03-March-2001","akshay@gmail.com","9870743210","Chennai","Tamil Nadu","India","./assets/images/1.jpg"))
    this.contacts?.push(new Contact(3,"Aditya","Krishna","Male","09-Sept-2001","aditya@gmail.com","8870290210","Chennai","Tamil Nadu","India","./assets/images/2.jpg"))
    this.contacts?.push(new Contact(4,"Aakanksha","Bhatt","Female","21-Sept-2001","ab@gmail.com","7870290210","Mumbai","UK","India","./assets/images/3.jpg"))
    this.contacts?.push(new Contact(5,"Minoti","Deshmukh","Female","30-Feb-2001","md@gmail.com","5640290210","Mumbai","Maharashtra","India","./assets/images/4.jpg"))

  }
}
