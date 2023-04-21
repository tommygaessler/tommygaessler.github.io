import { Component, OnInit } from '@angular/core';

import { projects } from '../../assets/projects/projects';

import { retiredProjects } from '../../assets/projects/retired-projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  keys: string[];
  retiredKeys: string[];
  projects: Object;
  retiredProjects: Object;
  twitter: Object;
  facebook: Object;

  constructor() { }

  ngOnInit() {
    this.projects = projects;
    this.retiredProjects = retiredProjects;
    this.keys = Object.keys(projects);
    this.retiredKeys = Object.keys(retiredProjects);
  }

}
