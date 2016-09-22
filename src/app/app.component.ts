import { Component } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { WordDisplayComponent } from './word-display/word-display.component';
import { WordEvaluateComponent } from './word-evaluate/word-evaluate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hangman';
  word  = '';
  category = '';
  onChangeCategory(category: string){
  	this.category = category; 
  	this.setWord();
  }

  setWord(){
  	if(this.category == '1') {
  		this.word = 'Juan';
  	}else if(this.category=='2'){
  		this.word = 'David';
  	}
  }
}
