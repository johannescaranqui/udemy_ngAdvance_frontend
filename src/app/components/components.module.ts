import { NgModule } from "@angular/core";
import { IncreaserComponent } from './increaser/increaser.component';
import { FormsModule } from '@angular/forms';
import { DoughnutComponent } from './graphics/doughnut/doughnut.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations:[
        IncreaserComponent,
        DoughnutComponent
    ],
    imports:[
        FormsModule,
        ChartsModule
    ],
    exports:[
        IncreaserComponent,
        DoughnutComponent
    ],
    providers:[]
})
export class ComponentsModule{}