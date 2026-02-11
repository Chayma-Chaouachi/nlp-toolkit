import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-lowercase',
  templateUrl: './to-lowercase.component.html',
  styleUrls: ['./to-lowercase.component.css']
})
export class ToLowercaseComponent implements OnInit {
  text: string = '';
  lowercaseText: string = '';
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

  convertToLowercase() {
    this.lowercaseText = this.text.toLowerCase();
  }

}
