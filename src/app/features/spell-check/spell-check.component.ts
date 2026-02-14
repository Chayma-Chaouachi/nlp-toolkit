import { Component, OnInit } from '@angular/core';
import { NlpApiService } from '../../services/nlp-api.service';


@Component({
  selector: 'app-spell-check',
  templateUrl: './spell-check.component.html',
  styleUrls: ['./spell-check.component.css']
})
export class SpellCheckComponent implements OnInit {
  text: string = '';
  errors: any[] = [];
  hasAnalyzed: boolean = false;
  isLoading: boolean = false;
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

analyze() {
  if (!this.text.trim()) return;

  this.hasAnalyzed = true;
  this.isLoading = true;
  this.errors = [];

  this.nlpApi.spell(this.text).subscribe({
    next: (res) => {
      const resultObj = res.result || {};

      this.errors = Object.keys(resultObj).map(key => ({
        word: key,
        suggestion: resultObj[key]
      }));

      this.isLoading = false;
    },
    error: (err) => {
      console.error(err);
      this.errors = [];
      this.isLoading = false;
    }
  });
}





}

