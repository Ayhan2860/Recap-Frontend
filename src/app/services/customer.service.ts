import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer, CustomerDto } from '../modules/customerModel';
import { ListResponseModel } from '../modules/listResponseModel';
import { SingleResponseModel } from '../modules/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  
  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath =`${environment.apiUrl}/customers/`
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  getCustomersById(customerId:number):Observable<SingleResponseModel<Customer>>{
    let newPath =`${environment.apiUrl}/customers/getbyid?id=${customerId}`
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }

  getCustomerDto():Observable<ListResponseModel<CustomerDto>>{
    let newPath = `${environment.apiUrl}/customers/getalldetail`
  return this.httpClient.get<ListResponseModel<CustomerDto>>(newPath);
   
  }
   

}
