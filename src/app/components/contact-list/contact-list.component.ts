import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts:Contact[]=[]
  noOfContacts?:number
  filteredContacts:Contact[]=[]

  constructor(private _contactService:ContactService){
  }
  ngOnInit(): void {
    // this.contacts?.push(new Contact(1,"Srivari","Chettiyar","Male","07-Sept-2001","srivari@gmail.com","9870290210","Mumbai","Maharashtra","India","./assets/images/sri.jpg"))
    // this.contacts?.push(new Contact(2,"Akshay","Srikanth","Male","03-March-2001","akshay@gmail.com","9870743210","Chennai","Tamil Nadu","India","./assets/images/1.jpg"))
    // this.contacts?.push(new Contact(3,"Aditya","Krishna","Male","09-Sept-2001","aditya@gmail.com","8870290210","Chennai","Tamil Nadu","India","./assets/images/2.jpg"))
    // this.contacts?.push(new Contact(4,"Aakanksha","Bhatt","Female","21-Sept-2001","ab@gmail.com","7870290210","Mumbai","UK","India","./assets/images/3.jpg"))
    // this.contacts?.push(new Contact(5,"Minoti","Deshmukh","Female","30-Feb-2001","md@gmail.com","5640290210","Mumbai","Maharashtra","India","./assets/images/4.jpg"))

    this.contacts=this._contactService.getAllContacts()
    this.noOfContacts=this.contacts?.length
    this.filteredContacts=[...this.contacts]


  }
  getAllContactsCount():number{
    return this.contacts?.length;
  }

  getMaleContactsCount():number{
    return this.contacts.filter(e=>e.gender==="Male").length
  }

  getFemaleContactsCount():number{
    return this.contacts.filter(e=>e.gender==="Female").length
  }

  filterContacts(eventData:string){
    if(eventData!=='All'){
      this.filteredContacts=this.contacts.filter(c=>c.gender===eventData)
    }
    else{
      this.filteredContacts=this.contacts
    }

    // console.log(eventData)
  }
  deleteContact(eventData:number){
    for (let index = 0; index < this.contacts.length; index++) {
      if (this.contacts[index].id===eventData){
        this.contacts.splice(index,1)
        this.filteredContacts=this.contacts
        console.log("Deleted contact for: ",eventData)
        break
      }
      
    }
  }
}
