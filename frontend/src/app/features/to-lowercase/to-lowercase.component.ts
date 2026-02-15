import { Component, OnInit } from '@angular/core';
import { NlpApiService } from '../../services/nlp-api.service';

@Component({
  selector: 'app-to-lowercase',
  templateUrl: './to-lowercase.component.html',
  styleUrls: ['./to-lowercase.component.css']
})
export class ToLowercaseComponent implements OnInit {

  text: string = '';
  lowercaseText: string = '';
  loading = false;
  error = '';

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

  convertToLowercase() {
    if (!this.text.trim()) {
      this.lowercaseText = '';
      return;
    }

    this.loading = true;
    this.error = '';

    this.nlpApi.transformToLowercase(this.text).subscribe({
      next: (res) => {
        this.lowercaseText = res.result; // 👈 clé backend
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to convert text.';
        this.loading = false;
      }
    });
  }
}
