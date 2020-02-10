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

    let titolo:string = title.value;
    let collegamento:string = link.value;

    let art = new Articolo(titolo, collegamento);

    this.infoArticolo.push( art );

    console.log(`Vettore di articoli:`);
    console.log(this.infoArticolo);
    console.log(`Articolo creato:`);
    console.log(art);
    console.log(`Titolo: ${art.titolo} \nCollegamento: ${art.collegamento}`);

    return false;
  }

}
