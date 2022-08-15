import { Urls } from "@/constantes/urls";
import { ref } from "vue";
import { Recette, RecetteItem,  RecetteItems ,Recettes} from "../interfaces/recette-model";
import { Categories , Categorie} from "../interfaces/categorie-model";




    const recettes = ref<Recette>();
    const categoriesList = ref<Categorie[]>();
    const recettesList = ref<RecetteItem[]>();
    const recetteRandom = ref<Recette>();
    const recetteDetail = ref<Recette>();
   


   async function getCategories(): Promise<void>  {
        const url:string = Urls.urlDeBase.concat(Urls.cats);
        const response = await fetch(url);
        const cx:Categories = await response.json();
        categoriesList.value = cx.categories;  
    }

    async function getRecettesParCat(c:string): Promise<void> {
        const url:string = Urls.urlDeBase.concat(Urls.filtrer,Urls.fltrCat,c);
        const response = await fetch(url);
        const rl:RecetteItems= await response.json();   
        recettesList.value = rl.meals;             
    }


    async function getRecetteAuPif(): Promise<void> {
        const url:string = Urls.auPif;
        const response = await fetch(url);
        const hp:Recettes= await response.json();
        const data = hp.meals[0];   
        recetteRandom.value = data;    
    }


    async function getRecetteParId(id:string): Promise<void> {
      const url:string = Urls.urlDeBase.concat(Urls.trouver, 'i=', id)
      const response = await fetch(url);
      const dp:Recettes= await response.json();
      const data = dp.meals[0];   
      recetteDetail.value = data;    
  }



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

      export function avoirDetails() {
        return {
          recetteDetail,
          getRecetteParId    
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


