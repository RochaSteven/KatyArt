//import { RestServic } ;
import { Component, OnInit } from "@angular/core"; 
import { DomSanitizer } from "@angular/platform-browser"; 

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {
  
  //constructor(private sanitizer:DomSanitizer, private rest: RestService) { }
  //imagenPrevia:any;
  //files:any;
  //loading: Boolean;

  ngOnInit(): void {
  }
   
  public onFileSelected(event: any) {
  }

}
  