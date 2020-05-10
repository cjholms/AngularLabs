import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../shared/order';
import { OrderLine } from '../shared/orderLine';
import { Location } from '../shared/location';
import { OrdersRepositoryService } from '../shared/orders-repository.service';

@Component({
  selector: 'nw-ship-order',
  templateUrl: './ship-order.component.html',
  styleUrls: ['./ship-order.component.css']
})
export class ShipOrderComponent implements OnInit {
  public order: Order;

  constructor(private _route: ActivatedRoute,
    private _ordersRepoService: OrdersRepositoryService) { }

  getBestLocation(orderLine: OrderLine) {
    this._ordersRepoService.getBestLocation(orderLine.productID)
      .pipe(
        map(response => <Location>response[0])
      )
      .subscribe(location => orderLine.locationID = location.id);
  }

  markAsShipped(order: Order) {
    this._ordersRepoService.markAsShipped(order.id).subscribe();
  }

  markWithProblem(order: Order) {
    this._ordersRepoService.markAsTrouble(order.id).subscribe();
  }

  isReadyToShip(order: Order) {
    return order.lines.every(line => line.picked);
  }

  ngOnInit(): void {
    this.order = new Order();
    this.order.id = this._route.snapshot.params['orderID'];
    this._ordersRepoService.getOrder(this.order.id)
      .subscribe(response => this.order = response);
  }

}
