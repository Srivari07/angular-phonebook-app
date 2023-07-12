import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts:Contact[]=[]
  constructor() { 
    this.contacts?.push(new Contact(1,"Srivari","Chettiyar","Male","07-Sept-2001","srivari@gmail.com","9870290210","Mumbai","Maharashtra","India","./assets/images/sri.jpg"))
    this.contacts?.push(new Contact(2,"Akshay","Srikanth","Male","03-March-2001","akshay@gmail.com","9870743210","Chennai","Tamil Nadu","India","./assets/images/1.jpg"))
    this.contacts?.push(new Contact(3,"Aditya","Krishna","Male","09-Sept-2001","aditya@gmail.com","8870290210","Chennai","Tamil Nadu","India","./assets/images/2.jpg"))
    this.contacts?.push(new Contact(4,"Aakanksha","Bhatt","Female","21-Sept-2001","ab@gmail.com","7870290210","Mumbai","UK","India","./assets/images/3.jpg"))
    this.contacts?.push(new Contact(5,"Minoti","Deshmukh","Female","30-Feb-2001","md@gmail.com","5640290210","Mumbai","Maharashtra","India","./assets/images/4.jpg"))
  }
  getAllContacts():Contact[]{
    return this.contacts
  }

  getContactById(id:number):Contact[]{ 
    return this.contacts.filter(c=>c.id==id)
  }

  deleteContactById(id:number):void{
    let i=this.contacts.findIndex(c=>c.id==id)
    this.contacts.splice(i,1)
    console.log('contact deleted:',id)
  }

  addContact(contact:Contact):void{
    this.contacts.push(contact)
    console.log("Contact added for id: ",contact.id)
  }

  updateContact(contact:Contact):void{
    let i=this.contacts.findIndex(c=>c.id==contact.id)
    this.contacts[i]=contact
    console.log('contact updated: ',this.contacts[i])
  }
}
