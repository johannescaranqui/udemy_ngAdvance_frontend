import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

interface Theme {
  urlTheme: string;
  theme: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  theme: Theme = {
    urlTheme: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.loadTheme();
  }

  saveTheme(){
    localStorage.setItem('theme', JSON.stringify(this.theme));
  }
  
  loadTheme(){
    if(localStorage.getItem('theme')){
      this.theme = JSON.parse(localStorage.getItem('theme'));
    }
    this.applyTheme(this.theme.theme);
  }

  applyTheme(theme: string){
    let url = `assets/css/colors/${ theme }.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this.theme.theme = theme;
    this.theme.urlTheme = url;
    this.saveTheme();
  }

}