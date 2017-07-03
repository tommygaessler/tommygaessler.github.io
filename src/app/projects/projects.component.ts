import { Component, OnInit } from '@angular/core';

import { projects } from '../../assets/projects/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  keys: string[];
  projects: Object;
  twitter: Object;
  facebook: Object;

  constructor() { }

  ngOnInit() {
    this.projects = projects;
    this.keys = Object.keys(projects);
  }

}
