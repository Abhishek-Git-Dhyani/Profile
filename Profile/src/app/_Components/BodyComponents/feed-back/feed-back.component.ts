import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit{
  screen : string; 

  ngOnInit(): void {
    this.screen = '/assets/Images/Pictures/TechnicalSkills/tvNoise.gif'
  }

  projectScreen()
  {
    this.screen = '/assets/Gifs/Project.gif';
  }
0
  contactScreen()
  {
    this.screen = '/assets/Gifs/contact.gif'
  }

  giveResume()
  {

  }
}
