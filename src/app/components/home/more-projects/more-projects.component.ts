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
     
      Title:'sample App',
      Description:'The Simple Quiz App is a user-friendly and straightforward application designed to offer a fun and interactive quiz experience. the quiz consists of multiple-choice questions, and users can select their answers from the provided options.',
      Technologies:['Html','Css','javaScript' , 'Jquery'],
      ghLink:'https://github.com/Vignesheldin/quizz-app',
      demoLink:'https://quizzzz-app-js.netlify.app/'
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
