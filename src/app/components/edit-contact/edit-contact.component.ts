import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact-service.service';




@Component({

  selector: 'edit-contact',

  templateUrl: './edit-contact.component.html',

  styleUrls: ['./edit-contact.component.css']

})

export class EditContactComponent implements OnInit{

  editForm?:FormGroup;

  contact:Contact=new Contact(0,"","","","","","","","","","");
  constructor(private service:ContactService, private activatedRoute:ActivatedRoute){

  }
  ngOnInit():void{
    this.activatedRoute.params.subscribe(paramsData=>{
      let id=paramsData['id']
      // access the contact by id using service
      this.service.getContactById(id).subscribe(data=>{
        this.contact=data

        this.editForm=new FormGroup({

          id:new FormControl(this.contact.id),
    
          firstname:new FormControl(this.contact.firstname,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])),
    
          lastname:new FormControl(this.contact.lastname,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])),
    
          gender:new FormControl(this.contact.gender,Validators.compose([Validators.required])),
    
          email:new FormControl(this.contact.email,Validators.compose([Validators.required,Validators.email])),
    
          dob:new FormControl(this.contact.dob,Validators.compose([Validators.required])),
    
          phone:new FormControl(this.contact.phone,Validators.compose([Validators.required,Validators.pattern("\d{10,10}")])),
    
          city:new FormControl(this.contact.city,Validators.required),
    
          state:new FormControl(this.contact.state,Validators.required),
    
          country:new FormControl(this.contact.country,Validators.required),
    
          picture:new FormControl(this.contact.picture,Validators.required),
    
        })
      })

    })
    

  }




  saveContact():void{

    console.log('Record inserted: ',this.contact);

  }

}