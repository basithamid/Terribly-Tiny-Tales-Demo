import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Input } from '../input'
import { WordCountService } from 'src/app/services/get-word-count.service';


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
    console.log("input value:", this.input.inputNumber )
    this._wordService.getWords(this.input.inputNumber)
      .subscribe(data=> {this.wordFrequency = data['data']
                        console.log("The file content is:", this.wordFrequency)
                        this.submitClicked.emit(this.wordFrequency)},
                error => this.errorMessage = <any>error)
  }

 
  ngOnInit() {
  }

}
