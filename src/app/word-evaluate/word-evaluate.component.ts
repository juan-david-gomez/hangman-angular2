import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { LetterClass } from '../shared/letter.class';
@Component({
  selector: 'app-word-evaluate',
  templateUrl: './word-evaluate.component.html',
  styleUrls: ['./word-evaluate.component.css']
})
export class WordEvaluateComponent implements OnInit {
	@Input() wordArr:LetterClass[];
	@Input() gameStatus:any[];
	@Output() onAcertWord = new EventEmitter<number[]>();
	lettersErr = [];
	constructor() { }

	ngOnInit() {
	}

	keydownLetter(e){
		if (e.keyCode >= 65 && e.keyCode <= 90){
			// var index = wordsUsed.indexOf(e.key);
			// if (index == -1) {
				let letter = e.key.toUpperCase();
				this.validLetter(letter);
			// }
		} 
	}


	validLetter(letter:string){
		let indexes = this.getAllIndexes(this.wordArr,letter);
		
		if (indexes.length > 0) {
			this.successLetter(indexes);
		}else{
			this.errorLetter(letter);		
		}
	}
	
	getAllIndexes(arr:LetterClass[], val:string) {
    	let indexes = [], i;
    	let value = val.toUpperCase();
	    for(i = 0; i < arr.length; i++)
	        if (arr[i].letter === value){
	            indexes.push(i);
	        }
	    return indexes;
	}

	//Muestra la letra en la seccion de errores ademas de cambiar la imagen del hangman
	//adicionalmente valida si se cumplio el tome maximo de errores y si es asi desplieaga el error 
	errorLetter(letter:string) {
		// attempts++;

		this.lettersErr.push(letter);
		// if (attempts == (attemptsClasses.length - 1)) {
		// 	MissingIndixes();
		// 	$scope.typeMgs  = 'alert-danger';
		// 	$scope.titleMsg	= "Lo siento";
		// 	$scope.bodyMsg	= "No has adivinado la palabra";
		// 	gameStatus = 0;
		// }
		// $scope.activeAttempt = attemptsClasses[attempts];
		// $scope.errorLetters.push(letter.toUpperCase());
	}

	// Muestra la letra encontrada en el la posicion correcta, 
	// ademas valida que si ya se hallaron todas las letras muestre el mensaje de exito
	successLetter(indexes:number[]) {
		console.log('Le pegaste a una letra');
		this.onAcertWord.emit(indexes);
	// 	indexes.forEach(function (indexVal) {
	// 		$scope.wordHidden[indexVal] = $scope.wordReal[indexVal]
	// 	})

	// 	var index = $scope.wordHidden.indexOf('');
	// 	if (index == -1) {
	// 		$scope.typeMgs  = 'alert-success';
	// 		$scope.titleMsg	= "Felicitaciones";
	// 		$scope.bodyMsg	= "Has adivinado la palabra";
	// 		gameStatus = 0;
	// 	}
	}
}
