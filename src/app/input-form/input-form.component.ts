import { Component, OnInit } from '@angular/core';
import { Input } from '../input'
import { WordCountService } from 'src/app/services/get-word-count.service';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  fileContent: string;
  errorMessage: string;
  constructor(private _wordService: WordCountService){}

  num: number;
  input = new Input(this.num)
    
  onSubmit(){
    console.log("input value:", this.input.inputNumber )
    this._wordService.getWords()
      .subscribe(data=> {this.fileContent = data['data']
                        console.log("The file content is:", this.fileContent)
                        console.log(typeof(this.fileContent))},
                error => this.errorMessage = <any>error)
  }

  get diagnostic(){
    return JSON.stringify(this.input)
  }

  ngOnInit() {
  }

}
