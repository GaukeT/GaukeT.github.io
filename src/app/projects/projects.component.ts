import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: project[] = [
    {name: "Advent Of Code", github: "adventofcode", demo: true},
    {name: "Advent Of Code (Java)", github: "adventOfCodeJava", demo: false},
    {name: "Music", github: "music", demo: true},
    {name: "Tea Topics", github: "tea-topics", demo: true},
    {name: "Sudoku solver", github: "sudoku-solver-js", demo: true},
    {name: "Sudoku solver (C#)", github: "SudokuSolver", demo: false},
    {name: "Nonogram", github: "nonogram-js", demo: true},
    {name: "Sorting visualization", github: "sorting-visualization", demo: true},
    {name: "Flocking simulation", github: "flocking-simulation", demo: true},
    {name: "Seven segment clock", github: "seven-segment-clock", demo: true},
    {name: "Breathing exercise", github: "breathing-exercise", demo: true},
    {name: "Genetic algorithm (Java)", github: "GeneticAlgorithm", demo: false},
    {name: "Traffic", github: "traffic", demo: true}
  ];
}

export interface project {
  name: string;
  github: string;
  demo: boolean;
}