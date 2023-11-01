import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  animations: [
    trigger('imageAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(-100%)',
      })),
      state('*', style({
        opacity: 1,
        transform: 'translateX(0)',
      })),
      transition('void => *, * => void', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class SampleComponent{

  images: string[] = [
    '/assets/Images/Pictures/TechnicalSkills/angular.png',
    '/assets/Images/Pictures/TechnicalSkills/aspnet.png',
    '/assets/Images/Pictures/TechnicalSkills/css.png',
  ];

  currentIndex: number = 0;

  onScroll(event: WheelEvent) {
    if (event.deltaY > 0 && this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else if (event.deltaY < 0 && this.currentIndex > 0) {
      this.currentIndex--;
    }
  }






  


}
