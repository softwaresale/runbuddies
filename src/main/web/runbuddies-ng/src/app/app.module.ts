import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule, SurfaceModule, CardModule } from 'design-kit';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SurfaceModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
