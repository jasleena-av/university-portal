import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherPortelComponent } from './teacher-portel/teacher-portel.component';
import { ParentPortelComponent } from './parent-portel/parent-portel.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { PipefilterPipe } from './pipefilter.pipe';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TeacherPortelComponent,
    ParentPortelComponent,
    NavbarComponent,
    PipefilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
