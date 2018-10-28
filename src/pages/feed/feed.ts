import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})

export class FeedPage {
  //formato Json
  public objeto_feed = {
    titulo: "luis lindonjonson",
    data: "november 5, 1955",
    descricao: "estou criando um app incrivel...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>();

  // variavel 
  public nome_usuario: string = "Luis Lindonjonson";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ) {
  }

  //função 
  /*public somaDeDoisNumero(num1: number, num2: number): void {
    alert(num1 + num2);
  }*/

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
       console.log(objeto_retorno);
      }, erro => {
        console.log(erro);
      }
    )
  }

}
