import { Component, OnInit } from '@angular/core';
import { OrdersRepositoryService } from '../shared/orders-repository.service';

@Component({
  selector: 'nw-orders-to-ship',
  templateUrl: './orders-to-ship.component.html',
  styleUrls: ['./orders-to-ship.component.css']
})
export class OrdersToShipComponent implements OnInit {
  public orders: any;
  constructor(private _ordersRepoService:OrdersRepositoryService) { }

  ngOnInit(): void {
    this.getOrdersReadyToShip();
  }

  getOrdersReadyToShip() {
    this._ordersRepoService.getOrdersReadyToShip()
      .toPromise()
      .then(
        (success) => { 
          console.log(success);
          this.orders = success;
         },
        (error) => { console.error(error); }
      );
  }

}
