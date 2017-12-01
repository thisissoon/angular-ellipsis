import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EllipsisModule } from './ellipsis/ellipsis.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EllipsisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
