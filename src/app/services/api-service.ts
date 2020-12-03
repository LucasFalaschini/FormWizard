import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Url base
  // https://servicios.qamercantilandina.com.ar/api/v1
  private baseUrl = environment.baseURL;

  private marcasUrl = '/vehiculos/marcas';

  private geoRefUrl = 'https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre';

  private coberturas = 'https://servicios.qamercantilandina.com.ar/api_mock_frontend/v1/coberturas';

  constructor(private http: HttpClient) {
   }


  public getMarcas() {
    return this.http.get<any[]>(this.baseUrl + this.marcasUrl);
  }


  public getGeo() {
    return this.http.get<any[]>(this.geoRefUrl);
  }


  public getCoberturas() {
    return this.http.get<any[]>(this.coberturas);
  }


  public crearUsuario() {

  }




}
