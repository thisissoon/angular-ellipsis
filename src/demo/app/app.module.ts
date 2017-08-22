import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EllipsisModule } from 'angular-ellipsis';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [BrowserModule, EllipsisModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
