import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../modules/colorModel';
import { ListResponseModel } from '../modules/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  getColor():Observable<ListResponseModel<Color>>{
    let newPath = environment.apiUrl +"/colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

}
