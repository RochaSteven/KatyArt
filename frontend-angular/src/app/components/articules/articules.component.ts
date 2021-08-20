import { Component, OnInit } from '@angular/core';
import { ArticulesService } from 'src/app/services/articules.service';
import { Articule } from 'src/app/class/articule';
import { DomSanitizer } from '@angular/platform-browser';
import { Article } from '../../models/article';

@Component({
  selector: 'app-articules',
  templateUrl: './articules.component.html',
  styleUrls: ['./articules.component.css']
})
export class ArticulesComponent implements OnInit {
  articule:any;
  articules:Articule [];
  public previsualizacion: string;
  constructor(private dataService:ArticulesService,private sanitizer: DomSanitizer) {
    this.articule= new Articule ();
   }

  ngOnInit(): void {
    this.getArticuleData();
  }
  getArticuleData(){
    this.dataService.getData().subscribe(res=>{
     this.articules=res as Articule[]});
  }
  addData(){
    const data=new FormData();
    data.append('archivo',this.articule.img);
    data.append('articule', JSON.stringify(this.articule));
    this.dataService.addData(data).subscribe(res=>{ 
      this.getArticuleData();
      console.log(res['msg']['summary']);
      console.log(res['msg']['detail']);
    },
    err => {
      console.log(err)
    }) 
  }
  deleteData(id:string){
    this.dataService.deleteData(id).subscribe(res=>{
    this.getArticuleData();
    console.log(res) ;
    }),
    this.getArticuleData();
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
