import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.page.html',
  styleUrls: ['./hackathon.page.scss'],
})
export class HackathonPage implements OnInit {

  item:any;

  constructor(private router: Router, private activeRoute : ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params=>{
      console.log(params)
      let obj:any = this.router.getCurrentNavigation()?.extras.state;
      this.item = obj.param1;
    })
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

  formatHours(hoursin:any)
  {
    var hours = new Date(hoursin);
    var retour = hours.getHours()+":"+hours.getMinutes()+hours.getMinutes();
    return retour;
  }
}
