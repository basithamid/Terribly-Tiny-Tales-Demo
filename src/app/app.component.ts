import { Component, Input } from '@angular/core';
import { WordCountService } from 'src/app/services/get-word-count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WordCountService ]
})
export class AppComponent {
  
  @Input() passWords: Object;
  
  onSubmitClicked(words: Object): void {
    this.passWords = words;

  } 
}
