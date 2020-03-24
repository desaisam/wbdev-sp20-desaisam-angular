import { Component, OnInit } from '@angular/core';
import { ModuleListServiceclient } from '../services/ModuleListServiceClient';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private service: ModuleListServiceclient,
    private route: ActivatedRoute) { }

  modules = [
    {
      _id: "",
      title: ""
    }
  ]

  moduleId = "";
  courseId = '';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId
      this.moduleId = params.moduleId;
    })
    this.service.findModulesForCourse(this.courseId).then(modules => this.modules = modules);
  }

}
