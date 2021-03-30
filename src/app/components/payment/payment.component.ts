import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/modules/carModel';
import { Rental } from 'src/app/modules/rentalModel';
import { CarService } from 'src/app/services/car.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  rental: Rental;
  carDetail: Car;
  amountTotalPrice: number = 0;

  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private paymentService: PaymentService,
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['rental']) {
        this.rental = JSON.parse(params['rental']);
        this.getRental();
        this.getCarId();
      }
    });
  }
  getRental() {
    //console.log(this.rental)
  }

  getCarId() {
    this.carService.getByCarId(this.rental.carId).subscribe((response) => {
      this.carDetail = response.data;
      this.totalPriceCalculator();
    });
  }


  totalPriceCalculator() {
    console.log(this.rental);
    if (this.rental.returnDate != null) {
      var dateOne = new Date(this.rental.rentDate.toString());
      var dateTwo = new Date(this.rental.returnDate.toString());

      var difference = dateTwo.getTime() - dateOne.getTime();

      var dateOfNumbers = Math.ceil(difference / (1000 * 3600 * 24));

      this.amountTotalPrice = dateOfNumbers * this.carDetail.dailyPrice;
 

      if (this.amountTotalPrice <= 0) {
        this.router.navigate(['/cars']);
        this.toastrService.error('Ana Sayfaya Yönlendiriliyorsunuz...');
      }
    }
  }

  totalPricePay() {
    this.paymentService
      .payAdd(this.rental, this.amountTotalPrice)
      .subscribe((response) => {
        this.router.navigate(['/cars']);
        this.toastrService.success(
          'Ödeme İşlemi Başarıyla Tamamlandı...',
          response.message
        );
      });
  }
}
