import { Component, OnInit, Input } from '@angular/core';
import { WordCountService } from 'src/app/services/get-word-count.service';

@Component({
  selector: 'words-table',
  templateUrl: './words-table.component.html',
  styleUrls: ['./words-table.component.css']
})
export class WordsTableComponent implements OnInit {

  @Input() tableWords: Object;

 constructor(private _wordService: WordCountService) { }

  ngOnInit() {
  }

}
