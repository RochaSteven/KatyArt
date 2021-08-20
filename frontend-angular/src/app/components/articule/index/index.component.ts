import { Component, OnInit } from '@angular/core';
import { ArticuleService } from '../articule.service';
import { Articule } from 'src/app/class/articule';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

 
  articules: Articule[] = [];

  // constructor() { }
  constructor(public  articuleService: ArticuleService) { }

  ngOnInit(): void {
    this. articuleService.getAll().subscribe((data: Articule[])=>{
      this. articules = data;
      console.log(this. articules);
    })
  }

  deleteArticule(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this. articuleService.delete(id).subscribe(res => {
          this. articules = this. articules.filter(item => item.id !== id);
          //console.log(' Articules deleted successfully!');
     })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
