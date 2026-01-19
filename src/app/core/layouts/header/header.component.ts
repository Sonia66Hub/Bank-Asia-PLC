import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // এটি যোগ করুন
import { RouterModule } from '@angular/router'; // যদি হেডারে কোনো লিঙ্ক থাকে

@Component({
  selector: 'app-header',
  standalone: true,    // এটি অবশ্যই থাকতে হবে
  imports: [CommonModule, RouterModule], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent { }