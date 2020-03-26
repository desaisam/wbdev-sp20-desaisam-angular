import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonServiceClient } from '../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient, private route: ActivatedRoute) { }
  lessonId = '';
  lessons = [];
  courseId = "";
  moduleId = '';
  ngOnInit(): void {
    // get module if from router
    this.route.params.subscribe(params => {this.moduleId = params.moduleId,
      this.lessonId = params.lessonId,
      this.courseId = params.courseId
      this.service.findLessonsForModules(this.moduleId).then(lessons => this.lessons = lessons)
    })
    
  }

}
