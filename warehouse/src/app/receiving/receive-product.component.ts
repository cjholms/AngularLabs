import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css']
})
export class ReceiveProductComponent implements OnInit {
  public showForm: boolean;

  constructor() { }

  saveTrackingNumber() {
    this.showForm = true;
  }

  receiveProduct() {
    console.log("Receive Product clicked");
  }

  finishedReceiving() {
    console.log("Finished Receiving clicked");
  }

  ngOnInit(): void {
  }

}
