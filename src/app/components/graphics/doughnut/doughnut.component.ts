import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: []
})
export class DoughnutComponent implements OnInit {
  @Input() labels: Label[] = ['No Data'];
  @Input() data: MultiDataSet = [[0]];
  @Input() chartType: ChartType='doughnut';
  
  constructor() { }

  ngOnInit() {
  }

}
