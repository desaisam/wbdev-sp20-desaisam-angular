import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CourseServiceClient } from './services/CourseServiceClient';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleListServiceclient } from './services/ModuleListServiceClient';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { LessonServiceClient } from './services/LessonServiceClient';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponent,
    HomeComponentComponent,
    ModuleListComponent,
    LessonTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseServiceClient, ModuleListServiceclient, LessonServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
