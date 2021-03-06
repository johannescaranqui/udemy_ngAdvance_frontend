import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard'},
        { title: 'ProgressBar', url: '/progress'},
        { title: 'graphics', url: '/graphics1'},
        { title: 'promises', url: '/promises'},
        { title: 'rxjs', url: '/rxjs'},
      ]
    }
  ];

  constructor() { }
}
