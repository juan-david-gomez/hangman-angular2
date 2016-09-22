import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { WordDisplayComponent } from './word-display/word-display.component';
import { WordEvaluateComponent } from './word-evaluate/word-evaluate.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    WordDisplayComponent,
    WordEvaluateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
