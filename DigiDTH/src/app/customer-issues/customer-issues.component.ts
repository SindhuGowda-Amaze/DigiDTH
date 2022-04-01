import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-customer-issues',
  templateUrl: './customer-issues.component.html',
  styleUrls: ['./customer-issues.component.css']
})
export class CustomerIssuesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  fileName = 'Pending Issues.xlsx';
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
