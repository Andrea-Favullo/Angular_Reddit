import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { Articolo } from './articolo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  infoArticolo: Articolo[] = [];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {

    console.log(`Adding article title: ${title.value} and link: ${link.value}`);

    this.infoArticolo.push( new Articolo(title.value, link.value) )

    return false;
  }

}
