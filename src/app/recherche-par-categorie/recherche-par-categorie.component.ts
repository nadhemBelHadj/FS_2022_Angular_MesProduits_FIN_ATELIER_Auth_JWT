import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitsComponent } from '../produits/produits.component';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  IdCategorie! : number;
  categories! : Categorie[];
  produits! : Produit[];


  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
    this.produitService.listeCategories().
      subscribe(cats => {this.categories = cats._embedded.categories;
      console.log(cats);
    });

  }

  onChange() {
    this.produitService.rechercherParCategorie(this.IdCategorie).
      subscribe(prods =>{this.produits=prods});

    }

}
