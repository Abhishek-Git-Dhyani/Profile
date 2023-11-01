import { AfterContentInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-game',
  templateUrl: './intro-game.component.html',
  styleUrls: ['./intro-game.component.css']
})
export class IntroGameComponent implements OnInit{
  endline : string = '';
  IntroPara : string = 'A student of .NET technology , I build scalable web Applicaion on dot net platform. ';
  Introduction : string = '';
  IntroArray : string[] = [];

  
  ngOnInit(): void {
    setInterval(() => { this.endline == '' ? this.endline= '!' : this.endline = '' },1000);
  }

  StartMyIntro()
  {
    this.Introduction = '';
    let i = 0;
    const interval = setInterval(() => {
      this.Introduction += this.IntroPara[i];
      i++;

      if(i == this.IntroPara.length)
      {
        clearInterval(interval);
      }
    } , 70);
  }

}
