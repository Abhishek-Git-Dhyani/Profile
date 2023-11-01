import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_Components/home/home.component';
import { FootNoteComponent } from './_Components/foot-note/foot-note.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WaveHeaderComponent } from './_Components/wave-header/wave-header.component';
import { NavbarComponent } from './_Components/navbar/navbar.component';
import { IntroComponent } from './_Components/intro/intro.component';
import { IntroGameComponent } from './_Components/intro-game/intro-game.component';
import { SampleComponent } from './_Components/sample/sample.component';
import { ProjectsComponent } from './_Components/BodyComponents/projects/projects.component';
import { ProjectDetailsComponent } from './_Components/BodyComponents/project-details/project-details.component';
import { TechnicalSkillsComponent } from './_Components/BodyComponents/technical-skills/technical-skills.component';
import { FeedBackComponent } from './_Components/BodyComponents/feed-back/feed-back.component';
import { GameComponent } from './_Components/BodyComponents/game/game.component';
import { SkillsComponent } from './_Components/BodyComponents/skills/skills.component';
import { ProjectScreenComponent } from './_Components/ScreenComponents/project-screen/project-screen.component';
import { ContactScreenComponent } from './_Components/ScreenComponents/contact-screen/contact-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FootNoteComponent,
    WaveHeaderComponent,
    NavbarComponent,
    IntroComponent,
    IntroGameComponent,
    SampleComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    TechnicalSkillsComponent,
    FeedBackComponent,
    GameComponent,
    SkillsComponent,
    ProjectScreenComponent,
    ContactScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
