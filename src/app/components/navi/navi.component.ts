import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/modules/carModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  cars:Car[]=[]
  filterCar:string
  constructor(private carSevice:CarService) { }

  ngOnInit(): void {
   this.getAllCars();
  }
  getAllCars(){
    this.carSevice.getCars().subscribe(res=>{
      this.cars = res.data
    })
  }

}
