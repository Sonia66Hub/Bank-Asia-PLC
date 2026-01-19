import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daily-admit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-admit.component.html',
  styleUrls: ['./daily-admit.component.css']
})
export class DailyAdmitComponent {
  isOpen = true;

  data = [
    { date: 'Tuesday, November 11, 2025', count: 2216 },
    { date: 'Wednesday, November 12, 2025', count: 253 },
    { date: 'Thursday, November 13, 2025', count: 76 },
    { date: 'Friday, November 14, 2025', count: 54 },
    { date: 'Saturday, November 15, 2025', count: 13 }
  ];

  get total() {
    return this.data.reduce((sum, d) => sum + d.count, 0);
  }

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}