import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherPortelComponent } from './teacher-portel/teacher-portel.component';
import { ParentPortelComponent } from './parent-portel/parent-portel.component';

const routes: Routes = [
  { path: '', redirectTo: '/teacher', pathMatch: 'full' },
  {
    path:"teacher-portel",component:TeacherPortelComponent
   },
   {
    path:"parent-portel",component:ParentPortelComponent
   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
