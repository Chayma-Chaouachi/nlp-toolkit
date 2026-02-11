import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summarization',
  templateUrl: './summarization.component.html',
  styleUrls: ['./summarization.component.css']
})
export class SummarizationComponent implements OnInit {
  particles: Array<{x: number, y: number, delay: number}> = [];

  ngOnInit() {
    // Générer 50 particules avec positions aléatoires
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 15  // Délai aléatoire pour désynchroniser les animations
      });
    }
  }

}
