
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.returnObservable()
    /* .pipe(
      retry(2)
    ) */
    .subscribe(
        (num: number) => console.log('Subs', num),
        error => console.error('Error in observer', error),
        () => console.log('The observer ends')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any>{
    return new Observable<any>( (observer: Subscriber<any>) => {
      let count = 0;
      let interval = setInterval(() => {
        count += 1;

        const out = {
          value: count
        }

        observer.next(out);

        /* if (count === 3) {
          clearInterval(interval);
          observer.complete();
        } */

        /* if (count === 2) {
          // clearInterval(interval);
          observer.error('The counter is equals to 2')
        } */

      }, 1000);
    }).pipe(
      map(data => data.value),
      filter((value, index) => { // like as light interruptor
        if (value % 2 !== 0) {
          return true;  
        }
      })
    );
  }

}
