import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticulesService {
  ApiService() {
    throw new Error('Method not implemented.');
  }
  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/articules')
  }
  getArticuleById(id: string) {
    return this.httpClient.get(`http://127.0.0.1:8000/api/articules/edit/${id}`)
  } 
  addData(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/articules/create', data)
  }
  deleteData(id: string) {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/articules/delete/${id}`)

  }
  updateArticuleData(id: string, data: any) {
    return this.httpClient.post(`http://127.0.0.1:8000/api/articules/update/${id}`, data);
  }
}
