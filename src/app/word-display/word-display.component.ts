import { Component, OnInit, OnChanges,Input,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-word-display',
  templateUrl: './word-display.component.html',
  styleUrls: ['./word-display.component.css']
})
export class WordDisplayComponent implements OnInit,OnChanges {
  @Input() word : string;

  lettersSpaces = [];
  lettersWord = [];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(changes);
    this.setlettersSpaces(changes['word'].currentValue);
  }

  setlettersSpaces(word:string){
	  	this.lettersSpaces = [];
	  	for (var i = 0; i < word.length; i++) {
			var originLetter = word.charAt(i);			
		    var letter = originLetter.toUpperCase();
		    this.lettersWord[i] = letter;
		    // Si es una letra se deja el espacio vacio '' pero si es una espacio se deja el mismo ' '
		    this.lettersSpaces[i] = this.isSpace(letter)?'':' ';
		}
  }
  isSpace(letter:string) {
		return letter == ' ';
  }

}
