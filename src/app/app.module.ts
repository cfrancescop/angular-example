import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesComponent } from './games/games.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker'
@NgModule({
  declarations: [
    AppComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatTableModule,
    MatButtonModule,

    MatDatepickerModule,
    MatNativeDateModule,

    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,

    HttpClientModule,

    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
