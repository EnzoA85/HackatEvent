import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.page.html',
  styleUrls: ['./inscription-form.page.scss'],
})
export class InscriptionFormPage implements OnInit {

  myForm: FormGroup = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    mail: new FormControl(),
  })
  submitted = false;


  constructor(public formBuilder: FormBuilder, public http: HttpClient) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      nom: ["",[Validators.required, Validators.minLength(3)]],
      prenom: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All fields are required.')
    } else {
      this.http.post("http://127.0.0.1:8001/api/postParticipant", this.myForm.value, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })})
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
    }
    return false;
  }

}
