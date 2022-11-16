import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  MonClick(){
    this.router.navigate(['/hackathon'])
  }

  pageDesHackathons(){
    this.router.navigate(['/liste-hackathons'])
  }
}
