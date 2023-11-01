import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { skills } from 'src/app/Models/skillModel';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})



export class SkillsComponent{

  skillData : skills[] = [
    {heading:'HTML',image:'assets/Images/Pictures/TechnicalSkills/html.png'
      ,para:'HTML (HyperText Markup Language) is the standard language for creating web pages. It uses tags to structure content, define elements, and link to resources on the internet.'},

    {heading:'CSS',image:'/assets/Images/Pictures/TechnicalSkills/css.png'
      ,para:'CSS (Cascading Style Sheets) is a style language used to describe the presentation of web documents, including colors, layouts, and fonts. It enhances the design and layout of HTML elements, making web pages visually appealing and user-friendly. CSS allows for easy maintenance and separation of content from design.'},

    {heading:'ANGULAR',image:'/assets/Images/Pictures/TechnicalSkills/angular.png'
      ,para:'Angular is a popular open-source web application framework developed by Google. It enables the creation of dynamic, single-page applications with a focus on modular, reusable code, dependency injection, and two-way data binding, streamlining web development and enhancing user experiences.'},

    {heading:'ASP DOT NET',image:'/assets/Images/Pictures/TechnicalSkills/aspnet.png'
      ,para:'ASP.NET is a web application framework by Microsoft, part of the .NET platform. It simplifies web development with features like server-side scripting, database connectivity, and robust tools for building dynamic, secure, and scalable web applications.'},

    {heading:'DOT NET CORE',image:'/assets/Images/Pictures/TechnicalSkills/dotnet.png'
      ,para:'.NET is a versatile, open-source framework by Microsoft for building various applications. It supports multiple programming languages and provides libraries, tools, and runtime environments for web, desktop, cloud, and mobile applications, simplifying cross-platform development and enhancing interoperability.'},

    {heading:'SQL',image:'/assets/Images/Pictures/TechnicalSkills/sql.png'
      ,para:'SQL (Structured Query Language) is a domain-specific language used to manage and manipulate relational databases. It enables tasks like data retrieval, insertion, modification, and deletion, making it essential for data storage and retrieval in many applications.'},

    {heading:'BASH SCRIPTING',image:'/assets/Images/Pictures/TechnicalSkills/bash.png'
      ,para:'Bash scripting is a scripting language used for automating tasks and creating scripts on Unix-like operating systems. It simplifies executing commands, file manipulation, and process automation in a text-based terminal environment.'}
  ];


  images: string[] = [
    '/assets/Images/Pictures/TechnicalSkills/html.png',
    '/assets/Images/Pictures/TechnicalSkills/css.png',
    '/assets/Images/Pictures/TechnicalSkills/angular.png',
    '/assets/Images/Pictures/TechnicalSkills/aspnet.png',
    '/assets/Images/Pictures/TechnicalSkills/dotnet.png',
    '/assets/Images/Pictures/TechnicalSkills/sql.png',
    '/assets/Images/Pictures/TechnicalSkills/bash.png',
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
