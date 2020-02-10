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
    console.log(this.obj_art);
    this.title = this.obj_art.titolo;
    this.link = this.obj_art.collegamento;
    this.votes = 10;
  }

  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }

  ngOnInit() {}

}
