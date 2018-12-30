import { Component, OnInit } from '@angular/core';
import { BringUserService } from '../shared/bring-user.service';

@Component({
  selector: 'app-dtcustom',
  templateUrl: './dtcustom.component.html',
  styleUrls: ['./dtcustom.component.css'],
  providers: [BringUserService]
})
export class DtcustomComponent implements OnInit {
  userData: any;

  dtOptions: DataTables.Settings = {};

  constructor(private bus: BringUserService) { }

  ngOnInit(): void {
    this.bus.getUserData().subscribe((res) => {
      this.userData = res;
      this.dtOptions = {
        paging: false,
        pagingType: 'full_numbers'
      };
    });

  }

  selectedValue(evt: any) {
    //debugger
    //evt.nativeElement.sectionRowIndex
    this.userData[evt.nativeElement.sectionRowIndex].noClicks++;
    console.log(this.userData[evt.nativeElement.sectionRowIndex], " Emitted values")
    //console.log(evt, " Emitted value ");
  }
}
