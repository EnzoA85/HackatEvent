import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.page.html',
  styleUrls: ['./hackathon.page.scss'],
})
export class HackathonPage implements OnInit {

  ListeHackathon:any;
  constructor(private http: HttpClient,private router:Router) { 
    this.http.get("http://localhost:8001/api").subscribe(results => {this.ListeHackathon=results})
  }

  ngOnInit() {
  }

  MonClick2(){
    this.router.navigate(['/home'])
  }
}
