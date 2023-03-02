import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.page.html',
  styleUrls: ['./hackathon.page.scss'],
})
export class HackathonPage implements OnInit {

  hackathon:any;
  ListeAteliers:any;
  atelier:any;

  constructor(private router: Router, private activeRoute : ActivatedRoute, private http: HttpClient) {
    this.activeRoute.queryParams.subscribe(params=>{
      let obj:any = this.router.getCurrentNavigation()?.extras.state;
      this.hackathon = obj.param1; 

      //récupération des ateliers dans ListeAteliers avec hackathon.id
      this.http.get("http://localhost:8001/api/ateliers/"+this.hackathon.id).subscribe(results => {this.ListeAteliers=results})
    })
   }

  ngOnInit() {
  }


  formatdate(datein:any){
    var date=new Date(datein);
    var retour = date.getDate()+"/"+(date.getMonth()+1) +"/"+ date.getFullYear();
    return retour;
  }

  formatHours(hoursin:any)
  {
    var hours = new Date(hoursin);
    var retour = hours.getHours()+":"+hours.getMinutes()+hours.getMinutes();
    return retour;
  }

  Inscription(atelier: any){
    let NavigationExtras: NavigationExtras ={
      state : {
        param1: atelier
      }
    };
    this.router.navigate(['/inscription-form'],NavigationExtras)
  }


}
