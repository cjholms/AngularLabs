import { Component, OnInit } from '@angular/core';
import { OrdersRepositoryService } from '../shared/orders-repository.service';

@Component({
  selector: 'nw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public orders: any[] = [];
  constructor(private _ordersRepoService: OrdersRepositoryService) { }

  ngOnInit(): void {
    this.getOrdersReadyToShip();
  }

  getOrdersReadyToShip() {
    console.log("hello world");
    this._ordersRepoService.getOrdersReadyToShip()
      .toPromise()
      .then(
        (success: any[]) => { 
          console.log(success);
          this.orders = success;
         },
        (error) => { console.error(error); }
      );
  }

}
