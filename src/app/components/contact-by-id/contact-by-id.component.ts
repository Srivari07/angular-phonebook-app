import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact-by-id',
  templateUrl: './contact-by-id.component.html',
  styleUrls: ['./contact-by-id.component.css']
})
export class ContactByIdComponent implements OnInit {
  contact:Contact=new Contact(0,"","","","","","","","","","")

  constructor(private service:ContactService, private activatedRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsData=>{
      let id=paramsData['id']
      console.log(id)
      this.service.getContactById(id).subscribe(data=>this.contact=data)
    })
  }
}
