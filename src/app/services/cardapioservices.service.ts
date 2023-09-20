import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardapio } from '../components/cardapio';
@Injectable({
  providedIn: 'root'
})
export class CardapioservicesService {
  private apiURL = 'http://localhost:3000/cardapio'
  constructor(private http:HttpClient) { }
  getAll():Observable <Cardapio[]>{
    return this.http.get<Cardapio[]>(this.apiURL)
}
}