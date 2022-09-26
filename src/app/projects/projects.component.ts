import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: project[] = [
    {name: "Music theory tool", github: "music"},
    {name: "Tea Topics", github: "tea-topics"},
    {name: "Sudoku solver", github: "sudoku-solver-js"},
    {name: "Nonogram", github: "nonogram-js"},
    {name: "Sorting visualization", github: "sorting-visualization"},
    {name: "Flocking simulation", github: "flocking-simulation"},
    {name: "Seven segment clock", github: "seven-segment-clock"},
    {name: "Traffic", github: "traffic"}
  ];
}

export interface project {
  name: string;
  github: string;
}