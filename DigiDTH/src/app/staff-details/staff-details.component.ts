import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    debugger
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
