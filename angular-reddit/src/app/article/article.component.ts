import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Articolo } from '../articolo';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'card';
  votes: number;
  title: string;
  link: string;

  @Input()
  obj_art: Articolo;

  constructor() {
    this.title = "Google";
    this.link = "www.google.com";
    this.votes = 10;
  }

  voteUp(): boolean {
    this.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }

  ngOnInit() {}

}
