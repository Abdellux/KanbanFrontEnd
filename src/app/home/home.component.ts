import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  links = [ 'Connexion', 'Nouveau Compte'];
  linksRoutes = [ 'login', 'register']
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }


  onChangeLink(link: string)
  {
    this.activeLink = link;
  }

}
