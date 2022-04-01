import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-company-setup',
  templateUrl: './company-setup.component.html',
  styleUrls: ['./company-setup.component.css']
})
export class CompanySetupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  update(){

  }
  public delete() {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to delete it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        // this.DigiofficeService.DeleteGrivenceRequests(ID).subscribe(data => {
        //   debugger
        //   Swal.fire('Cancelled Successfully')
        //   location.reload();
        // })
      }
    })
  }



  fileName = 'Company Details.xlsx';
    exportexcel(): void {
      /* table id is passed over here */
      let element = document.getElementById('download');
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      /* save to file */
      XLSX.writeFile(wb, this.fileName);
    }
  
}
