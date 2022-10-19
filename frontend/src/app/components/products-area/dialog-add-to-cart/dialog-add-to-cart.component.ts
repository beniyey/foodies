import { Component, Injectable, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-dialog-add-to-cart',
  templateUrl: './dialog-add-to-cart.component.html',
  styleUrls: ['./dialog-add-to-cart.component.scss']
})

export class DialogAddToCartComponent implements OnInit {

  @Input()
  quantity: number;

  constructor() { }

  ngOnInit(): void {
  }

}
