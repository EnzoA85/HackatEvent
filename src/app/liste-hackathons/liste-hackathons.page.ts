import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-liste-hackathons',
  templateUrl: './liste-hackathons.page.html',
  styleUrls: ['./liste-hackathons.page.scss'],
})
export class ListeHackathonsPage implements OnInit {

  ListeHackathon:any;
  searchBar:any;

  constructor(private http: HttpClient,private router:Router) { 
    this.http.get("http://localhost:8001/api/hackathon").subscribe(results => {this.ListeHackathon=results})
  }

  handleChange(event:any) {
    const query = event.target.value.toLowerCase()
    let results = from([this.ListeHackathon]);
    results.pipe(filter(d => d.toLowerCase().indexOf(query))).subscribe(d => this.searchBar.push(d));


    /*const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => this.d.toLowerCase().indexOf(query));*/
  }

  detailhackathon(item:any)
  {
    let NavigationExtras: NavigationExtras ={
      state : {
        param1: item
      }
    };
    this.router.navigate(['/hackathon'],NavigationExtras)
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
