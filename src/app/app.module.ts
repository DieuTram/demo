import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './app/heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { VillainComponent } from './app/villain/villain.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    VillainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
