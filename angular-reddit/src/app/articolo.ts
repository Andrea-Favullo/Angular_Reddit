export class Articolo {
  titolo: string;
  collegamento: string;

  constructor(public tit:string, public coll:string){

    this.titolo = tit;
    this.collegamento = coll;
  }

}
