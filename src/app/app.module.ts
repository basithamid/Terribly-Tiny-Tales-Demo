import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { WordsTableComponent } from './words-table/words-table.component';
import { ForbiddenInputDirective } from 'src/app/shared/invalid-value.directive';



@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    WordsTableComponent,
    ForbiddenInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
