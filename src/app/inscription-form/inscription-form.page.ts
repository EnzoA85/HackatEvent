import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.page.html',
  styleUrls: ['./inscription-form.page.scss'],
})
export class InscriptionFormPage implements OnInit {

  myForm: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      console.log(this.myForm.value)
    }
  }

}
