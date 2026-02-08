import { Component } from '@angular/core';

@Component({
  selector: 'app-spell-check',
  templateUrl: './spell-check.component.html',
  styleUrls: ['./spell-check.component.css']
})
export class SpellCheckComponent {
  text = '';
errors: { word: string; suggestion: string }[] = [];

analyze() {
  this.errors = [
    { word: 'lerning', suggestion: 'learning' },
    { word: 'languge', suggestion: 'language' }
  ];
}


}

