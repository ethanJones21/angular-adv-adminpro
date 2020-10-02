import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { NgModule } from '@angular/core';



const pagesRoutes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        children: [
        { path: '', component: DashboardComponent },
        { path: 'graficas1', component: Graficas1Component },
        { path: 'progress', component: ProgressComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }

