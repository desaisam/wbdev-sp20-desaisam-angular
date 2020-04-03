import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';


const routes: Routes = [

  { path: 'courses', component: CourseListComponent },
  { path: 'details/courses/:courseId', component: ModuleListComponent },
  { path: 'details/courses/:courseId/modules/:moduleId', component: ModuleListComponent },
  { path: 'details/courses/:courseId/modules/:moduleId/lessons/:lessonId', component: ModuleListComponent },
  // { path: 'quizzes', component: QuizzesComponent },
  { path: 'quizzes/:quizId', component: QuizComponent },
  { path: 'courses/:courseId/quizzes', component: QuizzesComponent },
  // { path: 'quizzes/:quizId/questions', component: QuizComponent },
  { path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent },

  { path: '', component: CourseListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
