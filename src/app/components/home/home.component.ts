import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  contacts?:Contact=new Contact(7,"Srivari","Chettiyar","Male","07-Sept-2001","srivari@gmail.com","9870290210","Mumbai","Maharashtra","India","./assets/images/sri.jpg")
}
