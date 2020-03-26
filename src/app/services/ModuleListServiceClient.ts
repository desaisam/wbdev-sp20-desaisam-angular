import { Injectable } from '@angular/core';

@Injectable()
export class ModuleListServiceclient {
    findModulesForCourse = (courseId) => 
        fetch(`https://wbdv-generic-server.herokuapp.com/api/desaisam/courses/${courseId}/modules/`).
        then(response => response.json());
    findCourseForCourseId = (courseId) => 
    fetch(`https://wbdv-generic-server.herokuapp.com/api/desaisam/courses/${courseId}`).then(response =>response.json())
}