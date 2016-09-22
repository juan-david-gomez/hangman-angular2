import { Component, OnInit,  EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Output() onChangeCategory = new EventEmitter<string>();

  constructor() { }
  selecWord(val:string){
  	this.onChangeCategory.emit(val);
  }
  ngOnInit() {
  }

}
