import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IColor {
  code: string;
  display: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [FormsModule]
})
export class AppComponent {
  colors: IColor[];
  version = 'Beta';
  person = '';
  favoriteColor = 'Blue';
  show = false;

  constructor() {
    this.colors = [
      {
        code: 'Blue',
        display: 'Blue ish'
      },
      {
        code: 'Red',
        display: 'Red ish'
      },
      {
        code: 'Green',
        display: 'Green ish'
      }
    ];
  }
}
