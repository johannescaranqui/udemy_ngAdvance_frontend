import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
  styles: []
})
export class Graphics1Component implements OnInit {

  graphics: any = {
    'graphic1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'chartType': 'doughnut',
      'title': 'El pan se come con'
    },
    'graphic2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'chartType': 'doughnut',
      'title': 'Entrevistados'
    },
    'graphic3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'chartType': 'doughnut',
      'title': '¿Le dan gases los frijoles?'
    },
    'graphic4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'chartType': 'doughnut',
      'title': '¿Le importa que le den gases?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
