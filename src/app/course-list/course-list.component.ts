import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  // This variable is readily avaiable on the html side
  title = "Course List Component"

  courses = [
    { _id: '123', title: "Course A" },
    { _id: '124', title: "Course B" },
    { _id: '125', title: "Course C" },
    { _id: '126', title: "Course D" }
  ]


  createCourse = (title) => {
    this.courses.push({
      _id: "1233",
      title
    })
  }

  constructor(private service: CourseServiceClient) { }
  newCourseTitle = 'New Course'
  deleteCourse = (dId) => {
    console.log(`Id received :${dId}`);

    this.courses = this.courses.filter(course => course._id !== dId)
  }

  ngOnInit(): void {


    this.service.findAllCourses()
    .then(courses => this.courses = courses);
  }

}
