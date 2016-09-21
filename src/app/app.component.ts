import { Component } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { WordDisplayComponent } from './word-display/word-display.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hangman';
}
