import { Component, OnInit } from '@angular/core';
import { ArticuleService } from '../articule.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public previsualizacion: String;
  public archivos: any = []
  form: FormGroup;

  constructor(
    private sanitizer:DomSanitizer,
    public articuleService: ArticuleService,
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
      //img: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
    });

  }
  
  captureFile(event):any{ 
    const archivoCapturado =event.target.files[0]
    this.extraerBase64(archivoCapturado).then(imagen => {
    //this.previsualizacion =imagen.base;
    console.log(imagen);
    })
    this.archivos.push(archivoCapturado)
    //console.log(event.target.file);
  }
  
  get f(){
    return this.form.controls;
  }

  submit(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log(this.form.value);
    this.articuleService.create(this.form.value).subscribe(res => {
         console.log('Articule created successfully!');
         this.router.navigateByUrl('articule/index');
    })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try { 
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          
          base: null
        });
      };
    } catch (e) {
      return null;
    }
  })

  subirArchivo(): any {

  }
}
