import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-more-projects',
  templateUrl: './more-projects.component.html',
  styleUrls: ['./more-projects.component.scss']
})
export class MoreProjectsComponent implements OnInit {
  Projects = [
    {
      Title: 'Personal Portfolio (Figma Design)',
      Description: "This Figma prototype showcases my personal portfolio website. Designed with a focus on clarity and user experience, it allows visitors to easily navigate my skills, experience, and projects. The clean and engaging design reflects my personality and creative vision.",
      Tags: ['#Portfolio', '#UxUiDesign', '#Figma', '#WebDesign'],
      demoLink: 'https://www.figma.com/proto/RI8JhCOFtueGGYY7ixy0DR/portfolio?type=design&node-id=7-2&t=rfjzpqXVkg28n2DT-0&scaling=min-zoom&page-id=0%3A1'
    },
  ]
  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
    ) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
    redirect(route: string, event) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink'){
        return
      }
      window.open(route, '_blank');
    }

}
