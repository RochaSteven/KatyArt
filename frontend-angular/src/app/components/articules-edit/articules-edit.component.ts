import { Component, OnInit } from '@angular/core';
import { ArticulesService } from 'src/app/services/articules.service';
import { Articule } from 'src/app/class/articule';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-articules-edit',
  templateUrl: './articules-edit.component.html',
  styleUrls: ['./articules-edit.component.css']
})
export class ArticulesEditComponent implements OnInit {
  id:any;
  data:any;
  articule= new Articule (); 
  public previsualizacion: string;
  constructor(private route:ActivatedRoute ,private dataService:ArticulesService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getData(); 
    console.log(this.id);
  }
  getData(){
    this.dataService.getArticuleById(this.id).subscribe(res=>{
    this.data=res;
    this.articule=this.data;
  })}
  updateArticule(){
    const data=new FormData();
      data.append('archivo',this.articule.img);
      data.append('articule', JSON.stringify(this.articule));
      this.dataService.updateArticuleData(this.articule.id, data).subscribe(res=>{ 
        console.log(res['msg']['summary']);
      console.log(res['msg']['detail']);
      },
      err => {
        console.log (err)
      })
    }

    //imagen
capturarFile(event): void{
  const archivoCapturado = event.target.files[0];
  this.articule.img=archivoCapturado;
  this.extraerBase64(archivoCapturado).then((imagen:any) =>{
    this.previsualizacion = imagen.base;
    console.log(imagen);
  })
}
extraerBase64 = async ($event: any) => new Promise((resolve) => {
  try {
    const unsafeImg = window.URL.createObjectURL($event);
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

}
