import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'Finsurge',
      Title: 'UX UI Designer/Developer',
      Date: 'February 2023 – present',
      Description: [
        'Collaborate with business analysts to gather requirements and translate them into user-friendly Figma designs.',
        'Partner with stakeholders to ensure design approval throughout the development process.',
        'Develop responsive user interfaces using Angular, transforming approved Figma designs into functional real screens'
      ]
    },
    {
      Tab: 'Education',
      Title: 'Bachelors In Computer Science',
      Date: '2019 — 2023',
      Description: [
        'Completed Bachelor of Engineering (BE) in Computer Science from Anna University.',
        'The graduation project is a sign language detection system, that detects sign languages in real-time video conferencing(gmeet, zoom).',
        'Acquired comprehensive knowledge in computer science principles, programming languages, and algorithms.',
        'Graduated with distinction, achieving a CGPA of 8.35. Not to brag, but I aced it!'
      ]
    }
  ];

  active = 0;

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }
}
