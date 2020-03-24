import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';


const routes: Routes = [

  { path: 'courses', component: CourseListComponent },
  { path: 'details/:courseId', component: CourseViewerComponent },
  { path: 'details/:courseId/modules/:moduleId', component: ModuleListComponent },
  { path: 'details/modules/:moduleId/lessons/:lessonId', component: LessonTabsComponent },

  { path: '', component: HomeComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
