import { Component, OnInit, OnChanges,Input,SimpleChanges } from '@angular/core'
import { LetterClass } from '../shared/letter.class';

@Component({
  selector: 'app-word-display',
  templateUrl: './word-display.component.html',
  styleUrls: ['./word-display.component.css']
})
export class WordDisplayComponent implements OnInit,OnChanges {
  @Input() wordArr : LetterClass[];
  @Input() gameStatus:any[];
  
  lettersSpaces = [];
  showLetter = [];
  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    // console.log(changes);
    this.setlettersSpaces(changes['wordArr'].currentValue);
  }

  setlettersSpaces(wordArr:LetterClass[]){
	  	this.lettersSpaces = [];
	  	let i = 0;
      console.log(wordArr);
	  	for(let index in wordArr){
			  var originLetter = wordArr[index];		
		    /*this.lettersSpaces[i] = this.isSpace(originLetter)?'':' ';*/
        this.lettersSpaces[i] = originLetter;
	  		i++;
	  	}
      console.log(this.lettersSpaces);
  }

}
