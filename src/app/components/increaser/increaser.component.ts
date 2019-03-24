import { Component, 
        OnInit, 
        Input, 
        Output, 
        EventEmitter, 
        ViewChild, 
        ElementRef } from '@angular/core';
import { PROGRESS_MIN_VALUE, PROGRESS_MAX_VALUE } from 'src/app/pages/pages.constants';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: []
})
export class IncreaserComponent implements OnInit {

  @Input('label') title: string = "Increaser Title";
  @Input() initValue: number = PROGRESS_MIN_VALUE;
  @Input() increaseValue: number = 5;
  @Output() nowValue: EventEmitter<number> = new EventEmitter();
  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() { 
  }

  ngOnInit() {
  }

  changeValue(value: number){
    this.initValue += value;
    if (this.initValue >= PROGRESS_MAX_VALUE) {
      this.initValue = PROGRESS_MAX_VALUE;
    } else if (this.initValue <= PROGRESS_MIN_VALUE) {
        this.initValue = PROGRESS_MIN_VALUE;
    }
    this.nowValue.emit(this.initValue);
    this.txtProgress.nativeElement.focus();
  }

  ngModelchangeValue(value: number){
    // let elementHTML: any = document.getElementsByName('progress')[0];
    if (this.initValue >= PROGRESS_MAX_VALUE) {
      this.initValue = PROGRESS_MAX_VALUE;
    } else if (this.initValue <= PROGRESS_MIN_VALUE) {
        this.initValue = PROGRESS_MIN_VALUE;
    } else{
      this.initValue = value;
    }
    // elementHTML.value = this.initValue;
    this.txtProgress.nativeElement.value = this.initValue;

    this.nowValue.emit(this.initValue);
  }

}
