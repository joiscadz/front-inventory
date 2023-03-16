import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import  {KeycloakService, KeycloakAngularModule} from "Keycloak-angular"


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;
  username: any;
  menuNav = [
    {name: "Home", route:"home", icon:"home"},
    {name: "Categorias", route:"category", icon:"category"},
    {name: "Productos", route:"product", icon:"production_quantity_limits"}

  ]

  constructor(media: MediaMatcher, private keycloakService: KeycloakService){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');

  }

 

  ngOnInit(): void {
    this.username = this.keycloakService.getUsername();
  }

  logout(){
    this.keycloakService.logout();

  }

}
