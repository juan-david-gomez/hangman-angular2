import { Component } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { LetterClass } from './shared/letter.class';
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
  gameStatus = {
	  finish : false,
	  success : false
  };

  onChangeCategory(category: string){
  	this.category = category; 
  	this.setWord();
  }
  onAcertWord(indexes:number[]){	
	indexes.forEach(index => {
		this.wordArr[index].show = true;
	});

	this.verifyComplete();
  	
  }
  verifyComplete(){
	  let showedLetters = this.wordArr.filter(letter => letter.show);
	  if(showedLetters.length === this.wordArr.length){
		this.gameStatus.finish = true;
		this.gameStatus.success = true;
	  }
  }

  setWord(){
  	if(this.category == '1') {
  		this.setWordArr('juan david');
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

			var letterObject = new LetterClass();
			letterObject.letter = letter;
			letterObject.isSpace = this.isSpace(letter);

		    this.wordArr[i] = letterObject;
		}
		console.log(this.wordArr);
   }
  isSpace(letter:string) {
		return letter == ' ';
  }
}
