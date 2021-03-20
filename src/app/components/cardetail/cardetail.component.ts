import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/modules/carImageModel';
import { Car } from 'src/app/modules/carModel';
import { CarImageService } from 'src/app/services/car-image-service.service';

import { CarService } from 'src/app/services/car.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  basePath = environment.baseUrl;
  images:CarImage[];
  cars:Car[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) {
        this.getImgByCarId(params["carId"]);
        this.getByCarId(params["carId"]);
      }
    })
 



  }

  getImgByCarId(carId:number){
    this.carImageService.getImageByCarId(carId).subscribe(response=>{
      this.images = response.data;
      console.log(response.data)
    })
    }

    getByCarId(carId:number){
      this.carService.getByCarId(carId).subscribe(response=>{
        this.cars = response.data;
      });
    }
    getSliderClassName(index:number){
      if (index == 0) {
        return 'carousel-item active'
      } else {
        return 'carousel-item'
      }
    }
   
    

    getBack(){
      this.carService.getCars();
    }



}
