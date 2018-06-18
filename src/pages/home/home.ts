import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EquipoPage } from '../equipo/equipo';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public equipos:any;
  constructor(public navCtrl: NavController, public http: Http){

  }

  getData(){

    let url = 'http://ionic_test.persiscalconsulting.com/listado_clubes.json'
    this.http.get(url)
    .map(res => res.json())
    .subscribe(data => {
      this.equipos = data.data
      console.log(data)
    },error =>{
      console.log(error)
    })
    /*
    // Por problemas con CORS al endpoint.
    let jsonS:string = '{"data": [{"id": "boca","name": "Boca Juniors"}, {"id": "independiente", "name": "Independiente"}, {"id": "river", "name": "River Plate"}, {"id": "sanlorenzo", "name": "San Lorenzo"}, {"id": "racing", "name": "Racing"}]}';

    let json = JSON.parse(jsonS)
    this.equipos = json.data
    //console.log(json)
    */
  }

  load(valor){
    this.navCtrl.push(EquipoPage,{
      id:valor
    })
  }

  ionViewDidLoad(){
    this.getData();
  }

}
