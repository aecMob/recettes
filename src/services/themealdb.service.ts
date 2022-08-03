import { Urls } from "@/constantes/urls";
import { ref } from "vue";
import { Recette, Recettes, RecetteItem } from "../interfaces/recette-model";
import { Categorie, Categories } from "../interfaces/categorie-model";
import { Ingredient, Ingredients } from "../interfaces/ingredient-model";

export class TheMealDB {

    static recettes = ref<Recette>();
    static categories = ref<Categories>;

    async getCategories(){
        const url:string = Urls.urlDeBase.concat(Urls.cats);
        const response = await fetch(url);
        TheMealDB.categories = await response.json();
        return TheMealDB.categories;
    }

    async getRecettesParCat(c:string){
        const url:string = Urls.urlDeBase.concat(Urls.filtrer,Urls.fltrCat,c);
        const response = await fetch(url);
        const recettesCat: RecetteItem[] = await response.json();
        return recettesCat;
    }

    async getRecettesParReg(a:String){

    }

    async getRecettesParIngred(i:String){

    }

    async getRecetteAuPif(){
        const url:string = Urls.urlDeBase.concat(Urls.auPif);
        const response = await fetch(url);
        const recetteAuPif: Recette = await response.json();
        return recetteAuPif;
    }

    async getRecetteParId(id:String){
        const url:string = Urls.urlDeBase.concat(Urls.filtrer,Urls.fltrCat,c);
        const response = await fetch(url);
        const recettesCat: RecetteItem[] = await response.json();
        return recettesCat;
    }
    
    async getCatsList(){

    }

    async getRegionsList(){

    }

    async getIngredsList(){

    }

}