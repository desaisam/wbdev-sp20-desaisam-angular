import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ModuleListComponent } from './module-list/module-list.component';


const routes: Routes = [

  { path: 'courses', component: CourseListComponent },
  { path: 'details/courses/:courseId', component: ModuleListComponent },
  { path: 'details/courses/:courseId/modules/:moduleId', component: ModuleListComponent },
  { path: 'details/courses/:courseId/modules/:moduleId/lessons/:lessonId', component: ModuleListComponent},
  { path: '', component: CourseListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
