import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  infoArticolo: articolo[] = [];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {

    console.log(`Adding article title: ${title.value} and link: ${link.value}`);

    infoArticolo.push( new articolo(title.value, link.value) )

    return false;
  }

}
