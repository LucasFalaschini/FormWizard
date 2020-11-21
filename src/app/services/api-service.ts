import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Url base
  // https://servicios.qamercantilandina.com.ar/api/v1

  private marcasUrl = "https://servicios.qamercantilandina.com.ar/api/v1/vehiculos/marcas";

  private geoRefUrl = 'https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre';

  private coberturas = 'https://servicios.qamercantilandina.com.ar/api_mock_frontend/v1/coberturas';

  constructor(private http: HttpClient) {
   }


  public getMarcas() {
    return this.http.get<any[]>(this.marcasUrl);
  }


  public getGeo() {
    return this.http.get<any[]>(this.geoRefUrl);
  }


  public getCoberturas() {
    return this.http.get<any[]>(this.coberturas);
  }



  // TODO Tengo que hacer esto
  // getHermanos() {
  //   return this.http.get(`${this.url}/hermanos.json`)
  //             .pipe(
  //               map( resp => this.crearArreglo(resp) ),
  //               // map(this.crearArreglo)
  //               delay(1000)
  //             );

  // }

  // private crearArreglo( hermanosObj: object) {

  //   const hermanos: HermanoModel[] = [];

  //   if ( hermanosObj === null) { return []; }

  //   Object.keys( hermanosObj ).forEach( key => {
  //     const hermano: HermanoModel = hermanosObj[key];
  //     hermano.id = key;

  //     hermanos.push(hermano);
  //   });

  //   return hermanos;
  // }




}
