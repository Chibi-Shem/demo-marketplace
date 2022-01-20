import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  title: string;
}
const ROUTES: RouteInfo[] = [
  { path: '/', title: 'ALL COLLECTIBLES' },
  { path: '/card', title: 'CREATE' },
];
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuItems: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
