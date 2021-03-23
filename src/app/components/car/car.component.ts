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
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
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
      //  console.log(response.data)

     });
   }
   getByColorId(colorId:number){
     this.carService.getCarByColorId(colorId).subscribe(response=>{
       this.cars = response.data;
      
     })
   }
   getByCarId(brandId:number){
    this.carService.getCarByCarId(brandId).subscribe(response=>{
      this.cars = response.data;
    
      
    })
  }
  
 setCurrentCars(car:Car){
   this.currentCar=car;
 }
 
}
