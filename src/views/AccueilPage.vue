<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Recette du moment</ion-title>
      </ion-toolbar>
    </ion-header>

    
    <ion-content :fullscreen="true" >
      <ion-item>
        <ion-label>{{infoAccueil?.strMeal}}</ion-label>
</ion-item>
         <ion-item>
        <ion-label>{{infoAccueil?.strCategory}}</ion-label>
</ion-item>
         <ion-item>
        <ion-label>{{infoAccueil?.strArea}}</ion-label>
      </ion-item>
    </ion-content>


  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {Recette} from '../interfaces/recette-model';
import { avoirDataHome} from '../services/themealdb-service';
import { 
  IonPage,
  IonMenuButton,
  IonButtons,
  IonHeader,
  IonContent,  
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
      IonMenuButton,
  IonButtons,
    IonContent,
    IonTitle, 
    IonItem,
    IonLabel,
    IonToolbar

  },
  setup () {
    const {
          recetteRandom,
          getRecetteAuPif    
        } = avoirDataHome();
    
    getRecetteAuPif();
    const infoAccueil = recetteRandom;

    console.log(recetteRandom);
    // const{
    //       recetteRandom,
    //       getRecetteAuPif    
    //     } = avoirDataHome();
    // getRecetteAuPif();
    // const infoAccueil:Recette = recetteRandom!.value!.meals![0]
    // console.log(infoAccueil);


      return {
          infoAccueil
      }   
  }
})
</script>

<style scoped>

</style>