import { Component, OnInit } from '@angular/core';
import { NlpApiService } from '../../services/nlp-api.service';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent implements OnInit {

  text: string = '';
  keywords: string[] = [];
  particles: Array<{x: number, y: number, delay: number}> = [];

  constructor(private nlpApi: NlpApiService) {}

  ngOnInit() {
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 15
      });
    }
  }

  extractKeywords() {
    if (!this.text.trim()) return;

    this.nlpApi.keywords(this.text).subscribe({
      next: (res) => this.keywords = res.keywords,
      error: (err) => console.error(err)
    });
  }
}
