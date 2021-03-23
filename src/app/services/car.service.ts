import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/listResponseModel';
import { Car } from '../modules/carModel';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CarService {
   
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl + "/cars/carsdetail";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl + "/cars/getcarsbycolorid?id="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarByCarId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl + "/cars/getcarsbybrandid?id="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }


  getByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl + "/cars/getbyid?id="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  
}
