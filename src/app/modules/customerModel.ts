export interface Customer{
    customerId:number;
    userId:number;
    companyName:string;
}



export interface CustomerDto extends Customer{
    firstName:string;
    lastName:string;
    email:string;
}

