import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../modules/carImageModel';
import { ListResponseModel } from '../modules/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient:HttpClient) { }


   getImageByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
     let newPath = environment.apiUrl + "/carimages/getbycarid?id="+carId
    return  this.httpClient.get<ListResponseModel<CarImage>>(newPath)
   }






}


