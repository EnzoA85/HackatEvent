import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-hackathons',
  templateUrl: './liste-hackathons.page.html',
  styleUrls: ['./liste-hackathons.page.scss'],
})
export class ListeHackathonsPage implements OnInit {

  ListeHackathon:any;
  constructor(private http: HttpClient,private router:Router) { 
    this.http.get("http://localhost:8001/api/hackathon").subscribe(results => {this.ListeHackathon=results})
  }

  ngOnInit() {
  }

  MonClick2(){
    this.router.navigate(['/home'])
  }

  formatdate(datein:any){
    var date=new Date(datein);
    var retour = date.getDate()+"/"+(date.getMonth()+1) +"/"+ date.getFullYear();
    return retour;
  }
}
