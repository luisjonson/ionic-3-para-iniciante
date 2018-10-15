import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class FeedPage {
//formato Json
  public objeto_feed ={
    titulo:"luis lindonjonson",
    data:"november 5, 1955",
    descricao:"estou criando um app incrivel...",
    qntd_likes:12,
    qntd_comments:4,
    time_comment:"11h ago"
  }
  
// variavel 
  public nome_usuario:string = "Luis Lindonjonson";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //função 
  public somaDeDoisNumero(num1:number,num2:number): void{
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.somaDeDoisNumero(10,20);
  }

}
