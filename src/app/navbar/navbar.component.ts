import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title: string;
  url: string;

  articles = [{
    title: 'youtube',
    url: 'https://www.youtube.com/watch?v=sXI8DlZ5ktI&list=PLkY6Xj8Sg8-uBQaBU8wMLo2CrFkE-9VIZ&index=17'
  },
    {
      title: 'angular tutorial',
      url: 'https://www.javatpoint.com/angular-8-ngif-directive'
    }
  ];
  addArticle() {
    this.articles.push({title: this.title, url: this.url});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
