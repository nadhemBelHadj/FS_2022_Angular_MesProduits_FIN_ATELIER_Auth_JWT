import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styles: [
  ]
})
export class UpdateCategorieComponent implements OnInit {

  @Input()
  categorie! : Categorie;

  @Input()
  ajout!:boolean;


  @Output() 
   categorieUpdated = new EventEmitter<Categorie>();



  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.categorie);

  }

  saveCategorie() {
    this.categorieUpdated.emit(this.categorie);

  }

}
