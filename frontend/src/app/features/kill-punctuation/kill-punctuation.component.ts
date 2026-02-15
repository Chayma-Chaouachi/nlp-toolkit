import { Component, OnInit } from '@angular/core';
import { NlpApiService } from '../../services/nlp-api.service';

@Component({
  selector: 'app-kill-punctuation',
  templateUrl: './kill-punctuation.component.html',
  styleUrls: ['./kill-punctuation.component.css']
})
export class KillPunctuationComponent implements OnInit {
  text: string = '';
  cleanedText: string = '';
  particles: Array<{x: number, y: number, delay: number}> = [];

  constructor(private nlpApi: NlpApiService) {}

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
   this.nlpApi.killPunctuation(this.text).subscribe({
      next: (res) => this.cleanedText = res.result,
      error: (err) => console.error(err)
    });
  }

}
