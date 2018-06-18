import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { ListadoProvider } from '../../providers/listado/listado';


@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html'
})
export class EquipoPage {

  public nombre:string;
  public nombre_completo:string;
  public escudo:string;
  public apodo:string;
  public fecha:any;
  public estadio:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    let id = navParams.get('id')
    // Por problemas con las imágenes del endpoint que no andan, las piso para que se vean correctamente.
    switch(id) {
       case 'boca':
          this.escudo = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Boca_Juniors_2012.svg';
          break;

       case 'river':
          this.escudo = 'https://upload.wikimedia.org/wikipedia/commons/c/c9/RIVERNORMAL.png';
          break;

       case 'sanlorenzo':
          this.escudo = 'https://upload.wikimedia.org/wikipedia/commons/3/39/Escudo-San-Lorenzo.png';
          break;

       case 'racing':
          this.escudo = 'https://upload.wikimedia.org/wikipedia/commons/2/29/Racing_Club_%282014%29.svg';
          break;

       case 'independiente':
          this.escudo = 'https://upload.wikimedia.org/wikipedia/commons/d/db/Escudo_del_Club_Atl%C3%A9tico_Independiente.svg';
          break;

    }
    let url = 'http://ionic_test.persiscalconsulting.com/'+id+'.json'
    this.http.get(url)
    .map(res => res.json())
    .subscribe(data => {
      this.nombre = data.data.nombre;
      this.nombre_completo = data.data.nombre_completo;
      //this.escudo = data.data.escudo;
      this.apodo = data.data.apodo;
      this.fecha = data.data.fecha_fundacion;
      this.estadio = data.data.nombre_estadio;
      console.log(data)
    },error =>{
      console.log(error)
    })
  }





    ionViewDidLoad() {

    }




}
