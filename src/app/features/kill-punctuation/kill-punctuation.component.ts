import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kill-punctuation',
  templateUrl: './kill-punctuation.component.html',
  styleUrls: ['./kill-punctuation.component.css']
})
export class KillPunctuationComponent implements OnInit {
  text: string = '';
  cleanedText: string = '';
  particles: Array<{x: number, y: number, delay: number}> = [];

  ngOnInit() {
    // Générer 50 particules avec positions aléatoires
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 15
      });
    }
  }

  removePunctuation() {
    // Supprime toute la ponctuation
    this.cleanedText = this.text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"?¿¡!@]/g, '');
  }

}
