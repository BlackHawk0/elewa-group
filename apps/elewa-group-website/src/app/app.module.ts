import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { HomePageModule } from '@elewa-group/pages/elewa/home';
// import { HeroModule } from './libs/elements/elements.module';
import { HeroModule } from '@elewa-group/elements/layouts/hero';;

import { CardsModule } from '@elewa-group/features/components/cards';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ScullyLibModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
