export interface Rental{
    rentalId?:number;
    carId:number;
    customerId:number;
    rentDate:Date;
    returnDate?:Date
}




export interface RentalDetail extends Rental {
    companyName: string,
    userId: number,
    firstName: string,
    lastName: string,
    brandId: number,
    brandName: string,
    colorId: number,
    colorName: string,
    modelYear: number,
    dailyPrice: number,
    description: string

}