import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../shared/product';
import { Location } from '../shared/location';
import { LoginService } from '../shared/login.service';
import { OrdersRepositoryService } from '../shared/orders-repository.service';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css']
})
export class ReceiveProductComponent implements OnInit {
  public showForm: boolean;
  public isKnownProduct: boolean;
  public trackingNumber: string;
  public product: Product;
  public location: Location;
  private _receiveProducts: { product: Product, quantity: number, location: Location }[] = [];
  private _user: any;

  constructor(private _ordersRepoService: OrdersRepositoryService,
    private _loginService: LoginService) { }

  get receiveProducts(): { product: Product, quantity: number, location: Location }[] {
    return this._receiveProducts;
  }

  get user(): any {
    return this._user;
  }

  saveTrackingNumber() {
    this.showForm = true;
    console.log(this.trackingNumber);
  }

  receiveProduct(quantity: number) {
    console.log("Receive Product clicked");
    this._receiveProducts.push({ product: this.product, quantity: quantity, location: this.location });
    this.product = undefined;
  }

  finishedReceiving() {
    console.log("Finished Receiving clicked");
  }

  lookupProduct(productID) {
    this._ordersRepoService.getProduct(productID)
      .subscribe(response => {
        this.product = response;
        this.getBestLocation();
        this.isKnownProduct = true;
        console.log(this.product);
      }, error => {
        console.error(error);
        this.product = new Product();
        this.product.id = productID;
        this.product.name = "No product found";
        this.location = undefined;
        this.isKnownProduct = false;
      });
  }

  getBestLocation() {
    this._ordersRepoService.getBestLocation(this.product.id)
    .pipe(
      map(response => <Location>response[0])
    )
    .subscribe(location => this.location = location);
  }

  ngOnInit(): void {
    this._user = this._loginService.user;
  }

}
