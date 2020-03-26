import { Injectable } from '@angular/core';

@Injectable()
export class CourseServiceClient {
    findAllCourses = () =>     fetch("https://wbdv-generic-server.herokuapp.com/api/desaisam/courses/").
                               then(response => response.json())
                               
}