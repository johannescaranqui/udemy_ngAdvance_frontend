import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { _document } from '@angular/platform-browser/src/browser';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settingsService: SettingsService) { }

  ngOnInit() {
    this.placeCheckTheme();
  }

  changeTheme(theme: string, link: ElementRef){
    this.applyCheckTheme(link);
    this.settingsService.applyTheme(theme);
  }

  applyCheckTheme(link: any){
    let selectors: any = document.getElementsByClassName('selector');
    for (const ref of selectors) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  placeCheckTheme(){
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this.settingsService.theme.theme;
    for (const ref of selectors) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
