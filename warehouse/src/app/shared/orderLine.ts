import { Product } from './product';
import { Location } from './location';

export class OrderLine {
    quantity: number;
    productID: string;
    locationID: string;
    unitPrice: number;
    picked: boolean = false;
    product: Product;
    location: Location;
}