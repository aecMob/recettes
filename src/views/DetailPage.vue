<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
        <ion-title>Détail</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" >
      <ion-item>
        <h1>{{recetteDetail?.strMeal}}</h1>
</ion-item>
<ion-card>
  <ion-img :src="recetteDetail?.strMealThumb"></ion-img> 

</ion-card>
         <ion-item>
        <ion-label>Categorie : {{recetteDetail?.strCategory}}</ion-label>
</ion-item>
         <ion-item>
        <ion-label>Origine : {{recetteDetail?.strArea}}</ion-label>
      </ion-item>
      <ion-item>
        <h2> Ingredients </h2>
      </ion-item>
        <section>    
        <ul class="my-nav">
        <li v-if="recetteDetail?.strIngredient1">{{recetteDetail?.strMeasure1}} {{recetteDetail?.strIngredient1}}</li>
        <li v-if="recetteDetail?.strIngredient2">{{recetteDetail?.strMeasure2}} {{recetteDetail?.strIngredient2}}</li>
        <li v-if="recetteDetail?.strIngredient3">{{recetteDetail?.strMeasure3}} {{recetteDetail?.strIngredient3}}</li>
        <li v-if="recetteDetail?.strIngredient4">{{recetteDetail?.strMeasure4}} {{recetteDetail?.strIngredient4}}</li>
        <li v-if="recetteDetail?.strIngredient5">{{recetteDetail?.strMeasure5}} {{recetteDetail?.strIngredient5}}</li>
        <li v-if="recetteDetail?.strIngredient6">{{recetteDetail?.strMeasure6}} {{recetteDetail?.strIngredient6}}</li>
        <li v-if="recetteDetail?.strIngredient7">{{recetteDetail?.strMeasure7}} {{recetteDetail?.strIngredient7}}</li>
        <li v-if="recetteDetail?.strIngredient8">{{recetteDetail?.strMeasure8}} {{recetteDetail?.strIngredient8}}</li>
        <li v-if="recetteDetail?.strIngredient9">{{recetteDetail?.strMeasure9}} {{recetteDetail?.strIngredient9}}</li>
        <li v-if="recetteDetail?.strIngredient10">{{recetteDetail?.strMeasure10}} {{recetteDetail?.strIngredient10}}</li>
        <li v-if="recetteDetail?.strIngredient11">{{recetteDetail?.strMeasure11}} {{recetteDetail?.strIngredient11}}</li>
        <li v-if="recetteDetail?.strIngredient12">{{recetteDetail?.strMeasure12}} {{recetteDetail?.strIngredient12}}</li>
        <li v-if="recetteDetail?.strIngredient13">{{recetteDetail?.strMeasure13}} {{recetteDetail?.strIngredient13}}</li>
        <li v-if="recetteDetail?.strIngredient14">{{recetteDetail?.strMeasure14}} {{recetteDetail?.strIngredient14}}</li>
        <li v-if="recetteDetail?.strIngredient15">{{recetteDetail?.strMeasure15}} {{recetteDetail?.strIngredient15}}</li>
        <li v-if="recetteDetail?.strIngredient16">{{recetteDetail?.strMeasure16}} {{recetteDetail?.strIngredient16}}</li>
        <li v-if="recetteDetail?.strIngredient17">{{recetteDetail?.strMeasure17}} {{recetteDetail?.strIngredient17}}</li>
        <li v-if="recetteDetail?.strIngredient18">{{recetteDetail?.strMeasure18}} {{recetteDetail?.strIngredient18}}</li>
        <li v-if="recetteDetail?.strIngredient19">{{recetteDetail?.strMeasure19}} {{recetteDetail?.strIngredient19}}</li>
        <li v-if="recetteDetail?.strIngredient20">{{recetteDetail?.strMeasure20}} {{recetteDetail?.strIngredient20}}</li>
       </ul>
      </section>
      <ion-item>
        <h2> Instructions </h2>
      </ion-item>
      <ion-item-divider>
  <ion-item>{{recetteDetail?.strInstructions}}</ion-item>
      </ion-item-divider>
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {Recette, Recettes} from '../interfaces/recette-model';
import { avoirDetails} from '../services/themealdb-service';
import { useRoute } from 'vue-router';
import { 
  IonPage,
  IonBackButton,
  IonButtons,
  IonHeader,
  IonContent,
  IonCard,
  IonImg, 
  IonList,
  IonItemDivider, 
  IonItem,
  IonLabel,
  IonTitle, 
  IonToolbar,
} from '@ionic/vue';


export default defineComponent({
  name:'AccueilPage',
  components: {
    IonPage,
    IonHeader,
    IonBackButton,
    IonCard,
    IonImg,
    IonButtons,
  
  IonItemDivider,
    IonContent,
    IonTitle, 
    IonItem,
    IonLabel,
    IonToolbar
  },
  setup () {    
     const route = useRoute();
     console.log("la route parms est: " + route.params.id );
     const idChoisi = String(route.params.id);
     const {recetteDetail, getRecetteParId} = avoirDetails();
    
    getRecetteParId(idChoisi);
      return {
          recetteDetail,
      }   
 }
})
</script>

<style scoped>
    ion-item-divider{
     --padding-bottom:50px;
    }
    .my-nav {
  list-style-type: disc;
}
</style>