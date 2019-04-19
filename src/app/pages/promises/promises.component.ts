import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.counterPromise().then((message) => console.log('Finish string Promise!', message))
        .catch((error)=> console.error('Error on the string promise!!', error));
    this.counterBooleanPromise().then((message) => console.log('Finish boolean Promise!!', message))
        .catch((error)=> console.error('Error on the string promise!!', error));
  }

  counterPromise(): Promise<string> {
    return new Promise( (resolve, reject) => {
      let counter = 0;
      console.log('Begin Promise');
      let interval = setInterval(()=> {
        counter += 1;
        console.log(counter);
        if (counter === 3) {
          resolve('OK Process');
          // reject('Unsoported Error');
          clearInterval(interval);  
        }
      }, 1000);
    });
  }

  counterBooleanPromise(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let counter = 0;
      console.log('Begin Promise');
      let interval = setInterval(()=> {
        counter += 1;
        console.log(counter);
        if (counter === 3) {
          resolve(true);
          // reject(false);
          clearInterval(interval);  
        }
      }, 1000);
    });
  }

}
