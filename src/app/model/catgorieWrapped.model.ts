import { Categorie } from './categorie.model';
export class CategorieWrapper{
_embedded!: { categories: Categorie[]};
} 