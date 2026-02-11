import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clean-text',
  templateUrl: './clean-text.component.html',
  styleUrls: ['./clean-text.component.css']
})
export class CleanTextComponent implements OnInit {
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

}
