import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {AppRouterModule} from './routes.module';
import {LoginComponent} from './login.component';
import {RequestListComponent} from './requestList.component';
import {CreateRequestComponent} from './createRequest.component';

import {ServiciosService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RequestListComponent,
    CreateRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpModule
  ],
  providers: [
    ServiciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
