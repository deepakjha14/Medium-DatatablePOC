import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { BringUserService } from '../shared/bring-user.service';

@Component({
  selector: 'app-dtajax',
  templateUrl: './dtajax.component.html',
  styleUrls: ['./dtajax.component.css'],
  providers: [BringUserService]
})
export class DTAjaxComponent implements OnInit, OnChanges {
  message = '';
  dtOptions: DataTables.Settings = {};
  userData: any;

  whatIdClicked: any = '';

  constructor(private usDta: BringUserService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.usDta.getUserData().subscribe((res) => {
      // console.log(res, " User data arrived");
      this.userData = res;
      this.dtOptions = {
        paging: false,
        data: this.userData,
        columns: [{
          title: 'ID',
          data: 'id'
        }, {
          title: 'First name',
          data: 'firstName'
        }, {
          title: 'Last name',
          data: 'lastName'
        }, {
          title: '# clicks',
          data: 'noClicks'
        }
        ],
        rowCallback: (row: Node, data: any[] | Object, index: number) => {
          const self = this;
          // debugger
          // Unbind first in order to avoid any duplicate handler
          // (see https://github.com/l-lin/angular-datatables/issues/87)
          $('td', row).unbind('click');
          $('td', row).bind('click', () => {
            self.someClickHandler(data);
          });
          return row;
        }
      };
    });
  }

  someClickHandler(info: any): void {
    //debugger
    setTimeout(() => {
      this.userData.filter((rec, idx) => {
        if (rec.id === info.id) {
          rec.noClicks = rec.noClicks + 1;
        }

        this.whatIdClicked = rec.id;
      });
      this.dtOptions.data = this.userData;
    }, 0);
    // this.cdr.detectChanges();
    // console.log(this.userData, " User record ");
    this.message = info.id + ' - ' + info.firstName;
  }

  ngOnChanges(vals) {
    debugger
    console.log(vals, " Old New Vals");
  }

}
