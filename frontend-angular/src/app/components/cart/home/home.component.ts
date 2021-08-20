import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/class/cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carts: Cart[] = [];

  // constructor() { }
  constructor(public  cartService: CartService) { }

  
  ngOnInit(): void {
  }

  deleteArticule(id){
    this. cartService.delete(id).subscribe(res => {
         this. carts = this. carts.filter(item => item.id !== id);
         //console.log(' Articules deleted successfully!');
    })
  }

}