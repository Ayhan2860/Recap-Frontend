import { CarImage } from "./carImageModel";
import { Car } from "./carModel";

export interface CarAndImage{
    car:Car;
    images:CarImage[];
}