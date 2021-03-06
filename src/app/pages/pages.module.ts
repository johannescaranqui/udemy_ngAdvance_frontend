import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// MODULES
import { SharedModule } from '../shared/shared.module';

// COMPONENTS
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// ROUTES
import { PAGES_ROUTES } from './pages.routes';
import { ComponentsModule } from '../components/components.module';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// GRAPHICS

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        AccountSettingsComponent,
        PromisesComponent,
        RxjsComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ComponentsModule
    ],
    providers: []
})
export class PagesModule {}