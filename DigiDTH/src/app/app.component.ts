import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigiDTH';
  constructor(public router: Router)  { }
  company_name: any;
  temp:any;
  pagename:any;
  time:any;
  hh:any;
  mm:any;
  ampm:any;
  ngOnInit() {
    interval(1000).subscribe((x => {
      this.pagename = localStorage.getItem('Pagename')
    }));


  
    setInterval(() => {
      var time = new Date();
      this.time = time.toLocaleString('en-US', { hour: '2-digit', minute: 'numeric', hour12: true });
      let temp: any = this.time.split(':');
      this.hh = temp[0];
      let temp1: any = this.time.split(':')[1].split(" ");
      this.mm = temp1[0];
      this.ampm = temp1[1];
    }, 1000);
  }


  loader: any;
  public logout() {
    debugger
    this.loader = true;
    localStorage.setItem('roledid', "0");
    this.router.navigate(['/Login']).then(() => {

      location.reload();
      localStorage.clear();
      sessionStorage.clear();

    })
  }
  public accountsetting() {
    debugger
    this.router.navigate(['/MyAccountSetting']);
  }
  public onActivate(event: any) {
    window.scroll(0, 0);
  }


}



