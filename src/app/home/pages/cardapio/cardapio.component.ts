import { Component } from '@angular/core';
import { Cardapio } from 'src/app/components/cardapio';
import { CardapioservicesService } from 'src/app/services/cardapioservices.service';
@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  constructor(private cardapioservice: CardapioservicesService){
    this.getCardapio()
  }

  ngOnInit():void{}

  cardapio:Cardapio[] = [];
  getCardapio():void{
    this.cardapioservice.getAll().subscribe((Cardapio) => (this.cardapio = Cardapio));
  }
}
