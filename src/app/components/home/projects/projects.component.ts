import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  Projects = [
    {
      imgs:[
        '../../../../assets/images/portfolio/1.png',
        '../../../../assets/images/portfolio/2.png',
        '../../../../assets/images/portfolio/3.png',
        '../../../../assets/images/portfolio/4.png',
        '../../../../assets/images/portfolio/5.png',
      ],
      Title:'Personal Portfolio',
      Description:'This project started with a simple idea: "What if my portfolio could prescribe joy and excitement instead of just showcasing my skills?" So, I embarked on a journey to enhance the safety of prescribing good vibes and to tackle the challenges related to boring portfolios, which can have a significant impact on the viewer’s interest. The ultimate goal? To contribute to the overall improvement of internet happiness and make your visit to my portfolio a delightful experience!',
      Technologies:['Angular','SCSS','Java Script','Type Script', 'Html'],
      ghLink:'https://github.com/vigneshms2302/vignesh-portfolio-main',
      demoLink:'https://vigneshms2302.github.io/vignesh-portfolio-main/'
    },


  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
