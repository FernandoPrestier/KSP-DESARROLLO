import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { DatePipe } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';



import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { ListComponent } from './components/list/list.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DeleteModalConfirmComponent } from './components/delete-modal-confirm/delete-modal-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AddEditComponent,
    ListComponent,
    DeleteModalConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    MatDatepickerModule,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
