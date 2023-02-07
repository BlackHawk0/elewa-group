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
  @Input() backgroundImage = 'https://images.unsplash.com/photo-1675432980667-95da207814a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80';
}
