import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() subtitle = 'HOW TO RECOGNIZE AND ELEWA MEMBER';
  @Input() title = 'Dependable, Creative, Supportive, Open Minded and Fun*';
  @Input() footerText = '*SERIOUS WHEN IT MATTERS';
  @Input() backgroundImage = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
}
