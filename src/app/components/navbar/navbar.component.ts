import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems = [
    {title: 'Home', url: 'home'},
    {title: 'People', url: 'people'},
    {title: 'Films', url: 'films'},
    {title: 'Planets', url: 'planets'},
    {title: 'Vehicles', url: 'vehicles'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
