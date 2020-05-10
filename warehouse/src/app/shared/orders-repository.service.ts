import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { OrderLine } from './orderLine';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class OrdersRepositoryService {
  private _headers = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private _http: HttpClient) { }

  getOrdersReadyToShip(): Observable<Array<Order>> {
    return this._http.get<Array<Order>>("/api/orders/readyToShip");
  }

  getOrder(orderID: string): Observable<Order> {
    return this._http.get<Order>("/api/orders/" + orderID);
  }

  getProduct(productID: string): Observable<Product> {
    return this._http.get<Product>("/api/products/" + productID);
  }

  getBestLocation(productID: string): Observable<Array<Location>> {
    return this._http.get<Array<Location>>("/api/locations/forProduct/" + productID);
  }

  markAsShipped(orderID: string): Observable<Array<Order>> {
    return this._http.patch<Array<Order>>("/api/orders/" + orderID + "/markAsShipped", { status: "1" },
      { headers: this._headers });
  }

  markAsTrouble(orderID: string): Observable<Array<Order>> {
    return this._http.patch<Array<Order>>("/api/orders/" + orderID + "/MarkAsProblem", { status: "2" },
      { headers: this._headers });
  }
}
