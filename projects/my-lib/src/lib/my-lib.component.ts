import {Component} from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <button (click)="onClick()">Click me</button>
    <p>{{message}}</p>
  `,
  styles: []
})
export class MyLibComponent {
  message = '';
  cpt = 0;

  onClick(): void {
    this.cpt++;
    this.message = 'Vous avez cliqué sur le bouton : ' + this.cpt + ' fois';
  }

}
