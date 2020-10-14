import { Injectable } from '@angular/core';
import { Paper } from '../classes/paper';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  examplePaper: Paper[] = [
    {
      id: 0,
      url: "/Users/stevenschreck/STS-Cloud/Studium/Promotion (Kanis)/Quellen/2008.berti-Improved_dynamic_window_approach_by_using_Lyapunov_stability_criteria.pdf",
      title: "Vision for mobile robot navigation: a survey",
      author: [
        "V. Kress",
        "S. Zernetsch"
      ],
      citation: {
        author: "test"
      },
      rating: 2.4,
      reader: "Schreck",
      tags: [
        "test1",
        "test2"
      ]
    },
    {
      id: 1,
      url: "/Users/stevenschreck/STS-Cloud/Studium/Promotion (Kanis)/Quellen/2002.guilherme-Vision_for_mobile_robot_navigation-a_survey.pdf",
      title: "Vision for mobile robot navigation: a survey",
      author: [
        "V. Kress",
        "S. Zernetsch"
      ],
      citation: {
        author: "test"
      },
      rating: 2.4,
      reader: "Schreck",
      tags: [
        "test1",
        "test2"
      ]
    }
  ]

  constructor() { }

  public getAllPaper(): Paper[] {
    return this.examplePaper;
  }

  public getPaper(id: number): Paper | any{
    this.examplePaper.forEach(paper => {
      if (paper.id == id)
        return paper;
      else
        return null;
    })
  }

  public getCitation() {}
 }
