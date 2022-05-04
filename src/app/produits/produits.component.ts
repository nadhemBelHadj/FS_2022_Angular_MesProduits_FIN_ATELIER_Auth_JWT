import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { AuthService } from '../services/auth.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

    produits? : Produit[]; //un tableau de produits

  constructor(private produitService: ProduitService,
              public authService: AuthService) {
   //this.produits=[];
     }

  ngOnInit(): void {

    this.chargerProduits();
  }

  chargerProduits(){
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
  }

supprimerProduit(p: Produit)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();     
      
});
}
 
 

}
