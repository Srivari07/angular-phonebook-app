import { Injectable, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService implements OnInit{
  baseUrl:string="http://localhost:4300/contacts"
  contacts:Contact[]=[]
  constructor(private http:HttpClient) { 
    // this.contacts?.push(new Contact(1,"Srivari","Chettiyar","Male","07-Sept-2001","srivari@gmail.com","9870290210","Mumbai","Maharashtra","India","./assets/images/sri.jpg"))
    // this.contacts?.push(new Contact(2,"Akshay","Srikanth","Male","03-March-2001","akshay@gmail.com","9870743210","Chennai","Tamil Nadu","India","./assets/images/1.jpg"))
    // this.contacts?.push(new Contact(3,"Aditya","Krishna","Male","09-Sept-2001","aditya@gmail.com","8870290210","Chennai","Tamil Nadu","India","./assets/images/2.jpg"))
    // this.contacts?.push(new Contact(4,"Aakanksha","Bhatt","Female","21-Sept-2001","ab@gmail.com","7870290210","Mumbai","UK","India","./assets/images/3.jpg"))
    // this.contacts?.push(new Contact(5,"Minoti","Deshmukh","Female","30-Feb-2001","md@gmail.com","5640290210","Mumbai","Maharashtra","India","./assets/images/4.jpg"))
  }

  ngOnInit(): void {
  }
  getAllContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.baseUrl)

  }

  getContactById(id:number):Observable<Contact>{ 
    return this.http.get<Contact>(this.baseUrl+id)
  }

  deleteContactById(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+"/"+id)
  }

  addContact(contact:Contact):Observable<any>{
    return this.http.post(this.baseUrl,contact)
  }

  updateContact(contact:Contact):Observable<any>{
    return this.http.put(this.baseUrl+contact.id,contact)
  }
}
