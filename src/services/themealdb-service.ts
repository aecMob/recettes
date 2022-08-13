import { Urls } from "@/constantes/urls";
import { ref } from "vue";
import { Recette, RecetteItems ,Recettes} from "../interfaces/recette-model";
import { Categories , Categorie} from "../interfaces/categorie-model";




    const recettes = ref<Recette>();
    const categoriesList = ref<Categorie[]>();
    const recettesList = ref<RecetteItems>();
    const recetteRandom = ref<Recette>();
   


   async function getCategories(): Promise<void>  {
        const url:string = Urls.urlDeBase.concat(Urls.cats);
        const response = await fetch(url);
        const cx:Categories = await response.json();
        categoriesList.value = cx.categories;  
    }

    async function getRecettesParCat(c:string): Promise<void> {
        const url:string = Urls.urlDeBase.concat(Urls.filtrer,Urls.fltrCat,c);
        const response = await fetch(url);
        recettesList.value = await response.json();                
    }

    // async function getRecettesParReg(a:String): Promise<void> {

    // }

    // async function getRecettesParIngred(i:String): Promise<void> {

    // }

    async function getRecetteAuPif(): Promise<void> {
        const url:string = Urls.auPif;
        const response = await fetch(url);
        const hp:Recettes= await response.json();
        const data = hp.meals[0];   
        recetteRandom.value = data;    
    }

    // async function getRecetteParId(id:string): Promise<void> {
    //     const url:string = Urls.urlDeBase.concat(Urls.trouver,'i=',id);
    //     const response = await fetch(url);
    //     const recettesCat = await response.json();        
    // }
    
    // async function getCatsList(): Promise<void> {
    //     const url:string = Urls.listCats;
    //     const response = await fetch(url);
    //     const catList: any = await response.json();        
    // }

    // async function getRegionsList(): Promise<void> {

    // }

    // async function getIngredsList(): Promise<void> {

    // }

    export function avoirDonnees() {
        return {
          recettes,
          categoriesList,
          //getCatsList,
          getRecetteAuPif,
          getRecettesParCat,
          //getRecetteParId      
        }
      }

      export function avoirCategories() {
        return {
          categoriesList,
          getCategories    
        }
      }


      export function avoirRecList() {
        return {
          recettesList,
          getRecettesParCat    
        }
      }

      export function avoirDataHome() {
        return {
          recetteRandom,
          getRecetteAuPif    
        }
      }


      export async function avoirCats(): Promise<Categorie[]>  {
        const url:string = Urls.urlDeBase.concat(Urls.cats);
        const response = await fetch(url);
        const lesCats:Categories = await response.json();
        const data = lesCats.categories
        return data;
    }


