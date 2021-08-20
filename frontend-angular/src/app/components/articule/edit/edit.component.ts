import { Component, OnInit } from '@angular/core';
import { ArticuleService } from '../articule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Articule } from 'src/app/class/articule';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  articule: Articule;
  form: FormGroup;

  constructor(
    public articuleService: ArticuleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      code:  new FormControl('', [ Validators.required, Validators.pattern('^[0-9]*$') ]),
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      salePrice: new FormControl('', [ Validators.required, Validators.pattern("^(?!\s|.*\s$).*$")]),
      codePostal: new FormControl('', [ Validators.required, Validators.minLength(6),Validators.maxLength(6)  ]),
      stock:  new FormControl('', [ Validators.required, Validators.maxLength(50) ]),
      description: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      //img: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
    });

    this.id = this.route.snapshot.params['idArticule'];
    this.articuleService.find(this.id).subscribe((data: Articule)=>{
      this.form.get('code').setValue(data.code);
      this.form.get('name').setValue(data.name);
      this.form.get('salePrice').setValue(data.salePrice);
      this.form.get('codePostal').setValue(data.codePostal);
      this.form.get('stock').setValue(data.stock);
      this.form.get('description').setValue(data.description);
    });

  }

  get f(){
  
    return this.form.controls;
  }

  submit(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to edit?",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(this.form.value);
    this.articuleService.update(this.id, this.form.value).subscribe(res => {
         console.log('Articule updated successfully!');
         this.router.navigateByUrl('articule/index');
    })
        Swal.fire(
          'Edited!',
          'Your file has been edited.',
          'success'
        )
      }
    })
  }
}

