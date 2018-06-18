import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

/*
  Generated class for the ListadoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListadoProvider {
  basepath = '/listado'
  constructor(
    public http: HttpClient,
    public _platform: Platform
  ) {
    if(this._platform.is('cordova')) {
        this.basepath = 'http://ionic_test.persiscalconsulting.com'
    }
  }

  listado(){
    return this.http.get(this.basepath+'/listado_clubes.json')
  }

}
