import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../modules/listResponseModel';
import { Rental, RentalDetail } from '../modules/rentalModel';
import { ResponseModel } from '../modules/responseModel';
import { SingleResponseModel } from '../modules/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  rentaAdded(rental:Rental):Observable<ResponseModel>{
    let newPath = `${environment.apiUrl}/rentals/add`
    return this.httpClient.post<ResponseModel>(newPath,rental)
  }
 getRentals():Observable<ListResponseModel<Rental>>{
   let newPath = `${environment.apiUrl}/rentals/getall`
   return this.httpClient.get<ListResponseModel<Rental>>(newPath);
 }

 getRentalById(rentalId:number):Observable<ListResponseModel<Rental>>{
   let newPath = `${environment.apiUrl}/rentals/getbyid?id=${rentalId}`
   return this.httpClient.get<ListResponseModel<Rental>>(newPath);
 }

 getRentalsDto():Observable<ListResponseModel<RentalDetail>>{
   let newPath = `${environment.apiUrl}/rentals/rentaldetail`
   return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
 }

 getRentalCarId(carId:number):Observable<ListResponseModel<RentalDetail>>{
   let newPath = `${environment.apiUrl}/rentals/getrentalcariddetail?id=${carId}`
   return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);

 }

 getsRentalCarId(carId:number):Observable<SingleResponseModel<RentalDetail>>{
  let newPath = `${environment.apiUrl}/rentals/getbycariddto?id=${carId}`
  return this.httpClient.get<SingleResponseModel<RentalDetail>>(newPath);
 
}






}
