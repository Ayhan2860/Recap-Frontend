import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/modules/carModel';
import { CustomerDto } from 'src/app/modules/customerModel';
import { Rental } from 'src/app/modules/rentalModel';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  @Input() carDto: Car;
  customers: CustomerDto[];
  customerId: number;
  rentDate: Date;
  returnDate: Date;

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomerDto().subscribe((response) => {
      this.customers = response.data;
    });
  }

  initialDate(day: number) {
    var today = new Date();
    today.setDate(today.getDate() + day);
    return today.toISOString().slice(0, 10);
  }

  addToRental() {
    let newRental: Rental = {
      rentDate: this.rentDate,
      returnDate: this.returnDate,
      carId: this.carDto.carId,
      customerId: parseInt(this.customerId.toString())
    };

    this.router.navigate(['/payment/', JSON.stringify(newRental)]);
    this.toastrService.info('Ödeme Sayfasına Yönlendiriliyorsunuz...');
  }
}
