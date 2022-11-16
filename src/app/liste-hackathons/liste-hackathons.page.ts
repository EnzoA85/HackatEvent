import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-liste-hackathons',
  templateUrl: './liste-hackathons.page.html',
  styleUrls: ['./liste-hackathons.page.scss'],
})
export class ListeHackathonsPage implements OnInit {

  constructor(private http: HttpClient) { }

  listeHackathons:any;
  ngOnInit() {
    this.http.get("URL")
    .subscribe(results => {
      this.listeHackathons
    });
  }

}
