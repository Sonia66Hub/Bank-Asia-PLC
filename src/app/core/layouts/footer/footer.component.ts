import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// FooterBottomComponent ইমপোর্ট করুন
import { FooterBottomComponent } from '../footer-bottom/footer-bottom.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterBottomComponent], // এখানে অবশ্যই FooterBottomComponent যোগ করবেন
  templateUrl: './footer.component.html'
})
export class FooterComponent { }