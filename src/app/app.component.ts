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
  wordArr  = [];
  category = '';
  onChangeCategory(category: string){
  	this.category = category; 
  	this.setWord();
  }
  onAcertWord(indexes:number[]){
  	console.log(indexes);
  }

  setWord(){
  	if(this.category == '1') {
  		this.setWordArr('juan');
  	}else if(this.category=='2'){
  		this.setWordArr('david');
  	}
  	// console.log(this.wordArr);
  }
  setWordArr(word:string){
  		this.word = word;
	  	this.wordArr = [];
	  	for (var i = 0; i < word.length; i++) {
			var originLetter = word.charAt(i);			
		    var letter = originLetter.toUpperCase();
		    this.wordArr[i] = letter;
		}
   }
}
