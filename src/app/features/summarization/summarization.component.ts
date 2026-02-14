import { Component, OnInit } from '@angular/core';
import { NlpApiService } from '../../services/nlp-api.service';

@Component({
  selector: 'app-summarization',
  templateUrl: './summarization.component.html',
  styleUrls: ['./summarization.component.css']
})
export class SummarizationComponent implements OnInit {

  // 🎆 Particules (inchangé)
  particles: Array<{x: number, y: number, delay: number}> = [];

  // 🧠 NLP
  inputText = '';
  summary = '';
  loading = false;
  error = '';

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

  // 🚀 Appel backend
  summarizeText() {
    if (!this.inputText.trim()) return;

    this.loading = true;
    this.summary = '';
    this.error = '';

    this.nlpApi.summarize(this.inputText).subscribe({
      next: (res) => {
        this.summary = res.summary;
        this.loading = false;
      },
      error: () => {
        this.error = 'Erreur lors du résumé';
        this.loading = false;
      }
    });
  }
}
