import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Job {
  id: string;
  name: string;
}

interface Center {
  id: string;
  name: string;
  jobId: string;
}

interface Room {
  id: string;
  name: string;
  centerId: string;
}

@Component({
  selector: 'app-signature',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signature.component.html'
})
export class SignatureComponent {

  selectedJob = '';
  selectedCenter = '';
  selectedRoom = '';

  // validation flags
  showJobError = false;
  showCenterError = false;
  showRoomError = false;

  jobs: Job[] = [
    { id: '1413040', name: 'Teller--(Deadline :1/28/2024 11:59:00 PM)' },
    { id: '1413041', name: 'Cash Officer--(Deadline :1/30/2024 11:59:00 PM)' }
  ];

  centers: Center[] = [
    { id: 'C1', name: "Lalmatia Government Women's College, Lalmatia, Dhaka", jobId: '1413040' },
    { id: 'C2', name: "Mirpur College, Mirpur, Dhaka", jobId: '1413041' }
  ];

  rooms: Room[] = [
    { id: 'R310', name: 'Begum Rokeya Academic Bhaban--Room:Ground Floor#BBA-1--Total:40', centerId: 'C1' },
    { id: 'R311', name: 'Begum Rokeya Academic Bhaban--Room:Ground Floor#BBA-2--Total:45', centerId: 'C2' }
  ];

  filteredCenters: Center[] = [];
  filteredRooms: Room[] = [];

  // Job change
  onJobChange() {
    this.showJobError = false;
    this.filteredCenters = this.centers.filter(c => c.jobId === this.selectedJob);
    this.selectedCenter = '';
    this.filteredRooms = [];
    this.selectedRoom = '';
  }

  // Center change
  onCenterChange() {
    this.showCenterError = false;
    this.filteredRooms = this.rooms.filter(r => r.centerId === this.selectedCenter);
    this.selectedRoom = '';
  }

  // Button click
  startPdf() {

    // reset errors
    this.showJobError = false;
    this.showCenterError = false;
    this.showRoomError = false;

    if (!this.selectedJob) {
      this.showJobError = true;
      return;
    }

    if (!this.selectedCenter) {
      this.showCenterError = true;
      return;
    }

    if (!this.selectedRoom) {
      this.showRoomError = true;
      return;
    }

    const url =
      `https://ers.bdjobs.com/applications/bankasia/admin/AttendanceActionPdf.asp?job=${this.selectedJob}&center=${this.selectedCenter}&room=${this.selectedRoom}`;

    window.open(url, '_blank');
  }
}
