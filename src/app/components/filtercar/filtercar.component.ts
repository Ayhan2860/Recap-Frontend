import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/modules/brandModel';
import { Color } from 'src/app/modules/colorModel';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filtercar',
  templateUrl: './filtercar.component.html',
  styleUrls: ['./filtercar.component.css'],
})
export class FiltercarComponent implements OnInit {
  brands: Brand[] = [];
  colors: Color[] = [];
  filterColorText: string = '';
  filterBrandText: string = '';
  activeFilterColor: number;
  activeFilterBrand: number;
  currentAll: any;

  constructor(
    private colorService: ColorService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getColors();
    this.getBrands();
    this.getActivesFromParams();
  }

  getActivesFromParams() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['brandId']) this.activeFilterBrand = params['brandId'];
      if (params['colorId']) this.activeFilterColor = params['colorId'];
    });
  }

  getCurrentAll(event: any) {
    this.colors = event;
    this.brands = event;
  }

  getColors() {
    this.colorService.getColor().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  isCurrentBrand(brandId: number): boolean {
    return this.activeFilterBrand === brandId;
  }

  isCurrentColor(colorId: number): boolean {
    return this.activeFilterColor === colorId;
  }
}
