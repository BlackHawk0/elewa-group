import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaHeroComponent } from './layout/elewa-hero/elewa-hero.component';



@NgModule({
  imports: [CommonModule],
  declarations: [ElewaHeroComponent],
  exports: [ElewaHeroComponent]
})
export class HeroModule { }
