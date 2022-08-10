import { Urls } from "@/constantes/urls";
import { ref } from "vue";
import { Recette, Recettes, RecetteItem } from "../interfaces/recette-model";
import { Categorie, Categories } from "../interfaces/categorie-model";
import { Ingredient, Ingredients } from "../interfaces/ingredient-model";



    const recettes = ref<Recette>();
    const categoriesList = ref<Categories>();


    async function getCategories(): Promise<void>  {
        const url:string = Urls.urlDeBase.concat(Urls.cats);
        const response = await fetch(url);
        categoriesList.value = await response.json();
    }

     async function getRecettesParCat(c:string): Promise<void> {
        const url:string = Urls.urlDeBase.concat(Urls.filtrer,Urls.fltrCat,c);
        const response = await fetch(url);
        const recettesCat: RecetteItem[] = await response.json();        
    }

    // async function getRecettesParReg(a:String): Promise<void> {

    // }

    // async function getRecettesParIngred(i:String): Promise<void> {

    // }

    async function getRecetteAuPif(): Promise<void> {
        const url:string = Urls.urlDeBase.concat(Urls.auPif);
        const response = await fetch(url);
        const recetteAuPif: Recette = await response.json();        
    }

    async function getRecetteParId(id:string): Promise<void> {
        const url:string = Urls.urlDeBase.concat(Urls.trouver,'i=',id);
        const response = await fetch(url);
        const recettesCat: RecetteItem[] = await response.json();        
    }
    
    async function getCatsList(): Promise<void> {
        const url:string = Urls.listCats;
        const response = await fetch(url);
        const catList: any = await response.json();        
    }

    // async function getRegionsList(): Promise<void> {

    // }

    // async function getIngredsList(): Promise<void> {

    // }

    export function avoirDonnees() {
        return {
          recettes,
          categoriesList,
          getCatsList,
          getRecetteAuPif,
          getRecettesParCat,
          getRecetteParId      
        }
      }

      export function avoirCategories() {
        return {
          categoriesList,
          getCategories,    
        }
      }

