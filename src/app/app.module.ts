import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DTAjaxComponent } from './dtajax/dtajax.component';
import { DtcustomComponent } from './dtcustom/dtcustom.component';
import { DtrowDirective } from './dtcustom/dtrow/dtrow.directive';
import { DtcolumnDirective } from './dtcustom/dtcolumn/dtcolumn.directive';
import { DtcellDirective } from './dtcustom/dtcell/dtcell.directive';

@NgModule({
  declarations: [
    AppComponent,
    DTAjaxComponent,
    DtcustomComponent,
    DtrowDirective,
    DtcolumnDirective,
    DtcellDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
