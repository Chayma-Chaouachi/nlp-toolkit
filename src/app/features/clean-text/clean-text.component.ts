import { Component, OnInit } from '@angular/core';
import { NlpApiService } from '../../services/nlp-api.service';

@Component({
  selector: 'app-clean-text',
  templateUrl: './clean-text.component.html',
  styleUrls: ['./clean-text.component.css']
})
export class CleanTextComponent implements OnInit {
  inputText: string = '';
  outputText: string = '';


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


  cleanHtml() {
    if (!this.inputText.trim()) return;

    this.nlpApi.cleanHtml(this.inputText).subscribe({
      next: (res) => {
        this.outputText = res.result;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
