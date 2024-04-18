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

    // {
    //   imgs:[
    //     '../../../../assets/images/todo-app/1.PNG',
    //     '../../../../assets/images/todo-app/2.PNG',
    //     '../../../../assets/images/todo-app/3.PNG',
    //   ],
    //   Title:'Dynamic Todo App',
    //   Description:'Users can add, edit, delete, and prioritize tasks. Each task typically contains a title, description, due date, and status. The app allows users to reorder tasks by dragging and dropping them into different categories or positions, making it easy to organize and prioritize tasks.',
    //   Technologies:['Angular','SCSS','Angular-Material' , 'RxJS'],
    //   ghLink:'https://github.com/Vignesheldin/dynamic-todo-app',
    //   demoLink:'https://dynamic-todo-app.netlify.app/'
    // },
    // {
    //   imgs:[
      
    //     '../../../../assets/images/recipe-book/screenshot (1).png',
    //     '../../../../assets/images/recipe-book/screenshot (2).png',
    //     '../../../../assets/images/recipe-book/screenshot (3).png',
    //   ],
    //   Title:'Recipe Book',
    //   Description:'Users can add new recipes to their collection and categorize them based on different types of cuisines or meal types. Each recipe includes a comprehensive list of ingredients required for the dish, making it convenient for users to shop for the necessary items.',
    //   Technologies:['Angular','Css','Angular-Material' , 'RxJS','firebase'],
    //   ghLink:'https://github.com/Vignesheldin/recipe-book',
    //   demoLink:'https://recipe-book-theta-blue.vercel.app'
    // },
    // {
    //   imgs:[
    //     '../../../../assets/images/design-show/1.png',
    //     '../../../../assets/images/design-show/2.png',
    //     '../../../../assets/images/design-show/4.PNG',
    //   ],
    //   Title:'Design Show',
    //   Description:'Design Show provides a user-friendly interface that enables artists and designers to upload high-quality images and multimedia content, along with detailed project descriptions. This allows viewers to explore the creative process and context behind each artwork.',
    //   Technologies:['Html','SCSS','JavaScript' , 'Jquery', 'animation-libraries'],
    //   ghLink:'',
    //   demoLink:'https://design-show.netlify.app/'
    // },

  
    // {
    //   imgs:[
      
    //     '../../../../assets/images/typing-speed/1.png',
   
    //   ],
    //   Title:'Typing Speed Test',
    //   Description:` The application measures the number of words or characters typed per minute (words per minute - WPM or characters per minute - CPM) to determine the user's typing speed. In addition to speed, the test evaluates typing accuracy by calculating the number of errors made during the typing exercise.`,
    //   Technologies:['Html','CSS','JavaScript' , 'Jquery'],
    //   ghLink:'https://github.com/Vignesheldin/typing-speed-test',
    //   demoLink:'https://typingspeedgamee.netlify.app/'
    // },

    


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
