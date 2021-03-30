import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/modules/carModel';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
   imagePath = environment.baseUrl;
   cars:Car[]=[];
   currentCar:Car;
   filterCar:string;
   
   
  
  constructor(private carService:CarService,
  private activatedRoute:ActivatedRoute,
  
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
    if (params["brandId"]&&params["colorId"]) {
      this.getBrandIdAndColorId(params["brandId"],params["colorId"])
    }
    
    
      else if (params["brandId"]){
       this.getByCarId(params["brandId"])
      }
      else if(params["colorId"]){
        this.getByColorId(params["colorId"])
      }
      else{
        this.getCars();
      }
    })
  
  }
 

  
   getCars(){
     this.carService.getCars().subscribe(response=>{

       this.cars=response.data;


     });
   }


   getBrandIdAndColorId(brandId:number,colorId:number){
     this.carService.getBybrandIdAndColorId(brandId,colorId).subscribe(response=>{
       this.cars = response.data
     
     })
   }
   


   getByColorId(colorId:number){
     this.carService.getCarByColorId(colorId).subscribe(response=>{
       this.cars = response.data;
      console.log(this.cars);
      
     })
   }
   getByCarId(brandId:number){
    this.carService.getCarByCarId(brandId).subscribe(response=>{
      this.cars = response.data
    })
  }
  
 setCurrentCars(car:Car){
   this.currentCar=car;
 }




 
}
