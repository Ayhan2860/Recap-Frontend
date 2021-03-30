import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rental } from '../modules/rentalModel';
import { ResponseModel } from '../modules/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient:HttpClient) { }

   payAdd(rental:Rental, amount:number):Observable<ResponseModel>{
     let newPath = environment.apiUrl + "/rentals/paymentandrentaladd";
      rental.returnDate =  undefined;
     return this.httpClient.post<ResponseModel>(newPath,{payment:{amount:amount},rental:rental})
   }

}
