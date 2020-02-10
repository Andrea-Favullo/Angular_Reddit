import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { Articolo } from './articolo';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  infoArticolo: Articolo[] = [];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {

    console.log(`Adding article title: ${title.value} and link: ${link.value}`);

    let titolo:string = title.value;
    let collegamento:string = link.value;

    let art = new Articolo(titolo, collegamento);

    this.infoArticolo.push( art );

    console.log(this.infoArticolo);
    console.log(art);
    console.log(art.titolo);
    console.log(art.collegamento);

    return false;
  }

}
