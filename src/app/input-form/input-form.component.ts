import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Input } from '../input'
import { WordCountService } from 'src/app/services/get-word-count.service';
import{ ForbiddenInputDirective } from 'src/app/shared/invalid-value.directive';


@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  wordFrequency: string;
  errorMessage: string;
 
  constructor(private _wordService: WordCountService){}

  num: number;
  input = new Input(this.num)
  @Output() submitClicked: EventEmitter<Object> = new EventEmitter<Object>();

  dictData:any;

  onSubmit(){
    this._wordService.getWords(this.input.inputNumber)
      .subscribe(data=> {this.wordFrequency = data['data']
                        console.log(this.wordFrequency)
                        this.submitClicked.emit(this.wordFrequency)},
                error => this.errorMessage = <any>error)
  }

 
  ngOnInit() {
  }

  

}
