import {NgModule} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import {LoginComponent } from './login.component';
import {RequestListComponent} from './requestList.component';

const appModules: Routes = [
    {path: '', component: LoginComponent},
    {path: 'requests', component: RequestListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appModules, {})
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRouterModule {}
