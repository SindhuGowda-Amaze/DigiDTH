import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-installation',
  templateUrl: './new-installation.component.html',
  styleUrls: ['./new-installation.component.css']
})
export class NewInstallationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    debugger
    this.files.push(...event.addedFiles);
    this.uploadattachments();
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  public uploadattachments() {
    debugger
    // this.LearningService.AttachmentsUpload(this.files).subscribe(res => {
    //   debugger
    //   this.ChapterPhoto = res;
    //   alert("ATTACHMENT UPLOADED");
    // })
  }

 

  public complete() {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to Complete it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Complete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        // this.DigiofficeService.DeleteGrivenceRequests(ID).subscribe(data => {
        //   debugger
          Swal.fire('Complete Successfully')
          location.reload();
        // })
      }
    })
  }


}
