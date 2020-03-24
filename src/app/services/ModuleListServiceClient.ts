import { Injectable } from '@angular/core';

@Injectable()
export class ModuleListServiceclient {
    findModulesForCourse = (courseId) => 
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${courseId}/modules/`).
        then(response => response.json());
    
}