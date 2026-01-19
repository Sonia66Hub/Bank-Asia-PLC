// // import { Component } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { Router } from '@angular/router';

// // @Component({
// //   selector: 'app-dashboard',
// //   standalone: true,
// //   imports: [CommonModule],
// //   template: `
// //     <div style="text-align:center; margin-top:100px;">
// //       <h2>Welcome, {{ username }}</h2>
// //       <p>You have successfully signed in</p>
// //     </div>
// //   `
// // })
// // export class DashboardComponent {
// //   username = 'User';

// //   constructor(private router: Router) {
// //     const nav = this.router.getCurrentNavigation();
// //     this.username = nav?.extras.state?.['username'] || 'User';
// //   }
// // }





// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {

//   // Room list
//   rooms: { id: number; name: string }[] = [];

//   // Center change event (ASP.NET onchange এর মতো)
//   onCenterChange(event: Event) {
//     const centerId = (event.target as HTMLSelectElement).value;

//     if (centerId === '5') {
//       this.rooms = [
//         {
//           id: 311,
//           name: 'Begum Rokeya Academic Bhaban -- Room: 2nd Floor #311 -- Total: 46'
//         }
//       ];
//     } else {
//       this.rooms = [];
//     }
//   }

// }




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}
