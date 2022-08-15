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
        <h1>{{infoAccueil?.strMeal}}</h1>
</ion-item>
<ion-card>
  <ion-img :src="infoAccueil?.strMealThumb"></ion-img> 

</ion-card>
         <ion-item>
        <ion-label>Categorie : {{infoAccueil?.strCategory}}</ion-label>
</ion-item>
         <ion-item>
        <ion-label>Origine : {{infoAccueil?.strArea}}</ion-label>
      </ion-item>
      <ion-item>
        <h2> Ingredients </h2>
      </ion-item>
        <section>    
        <ul class="my-nav">
        <li v-if="infoAccueil?.strIngredient1">{{infoAccueil?.strMeasure1}} {{infoAccueil?.strIngredient1}}</li>
        <li v-if="infoAccueil?.strIngredient2">{{infoAccueil?.strMeasure2}} {{infoAccueil?.strIngredient2}}</li>
        <li v-if="infoAccueil?.strIngredient3">{{infoAccueil?.strMeasure3}} {{infoAccueil?.strIngredient3}}</li>
        <li v-if="infoAccueil?.strIngredient4">{{infoAccueil?.strMeasure4}} {{infoAccueil?.strIngredient4}}</li>
        <li v-if="infoAccueil?.strIngredient5">{{infoAccueil?.strMeasure5}} {{infoAccueil?.strIngredient5}}</li>
        <li v-if="infoAccueil?.strIngredient6">{{infoAccueil?.strMeasure6}} {{infoAccueil?.strIngredient6}}</li>
        <li v-if="infoAccueil?.strIngredient7">{{infoAccueil?.strMeasure7}} {{infoAccueil?.strIngredient7}}</li>
        <li v-if="infoAccueil?.strIngredient8">{{infoAccueil?.strMeasure8}} {{infoAccueil?.strIngredient8}}</li>
        <li v-if="infoAccueil?.strIngredient9">{{infoAccueil?.strMeasure9}} {{infoAccueil?.strIngredient9}}</li>
        <li v-if="infoAccueil?.strIngredient10">{{infoAccueil?.strMeasure10}} {{infoAccueil?.strIngredient10}}</li>
        <li v-if="infoAccueil?.strIngredient11">{{infoAccueil?.strMeasure11}} {{infoAccueil?.strIngredient11}}</li>
        <li v-if="infoAccueil?.strIngredient12">{{infoAccueil?.strMeasure12}} {{infoAccueil?.strIngredient12}}</li>
        <li v-if="infoAccueil?.strIngredient13">{{infoAccueil?.strMeasure13}} {{infoAccueil?.strIngredient13}}</li>
        <li v-if="infoAccueil?.strIngredient14">{{infoAccueil?.strMeasure14}} {{infoAccueil?.strIngredient14}}</li>
        <li v-if="infoAccueil?.strIngredient15">{{infoAccueil?.strMeasure15}} {{infoAccueil?.strIngredient15}}</li>
        <li v-if="infoAccueil?.strIngredient16">{{infoAccueil?.strMeasure16}} {{infoAccueil?.strIngredient16}}</li>
        <li v-if="infoAccueil?.strIngredient17">{{infoAccueil?.strMeasure17}} {{infoAccueil?.strIngredient17}}</li>
        <li v-if="infoAccueil?.strIngredient18">{{infoAccueil?.strMeasure18}} {{infoAccueil?.strIngredient18}}</li>
        <li v-if="infoAccueil?.strIngredient19">{{infoAccueil?.strMeasure19}} {{infoAccueil?.strIngredient19}}</li>
        <li v-if="infoAccueil?.strIngredient20">{{infoAccueil?.strMeasure20}} {{infoAccueil?.strIngredient20}}</li>
       </ul>
      </section>
      <ion-item>
        <h2> Instructions </h2>
      </ion-item>
      <ion-item-divider>
  <ion-item>{{infoAccueil?.strInstructions}}</ion-item>
      </ion-item-divider>


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
  IonItemDivider,
  IonCard,
  IonImg,  
  IonItem,
  IonList,
  IonLabel,
  IonTitle, 
  IonToolbar,

} from '@ionic/vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name:'AccueilPage',  

  components: {
    IonPage,
    IonHeader,
      IonMenuButton,
      IonImg,
      IonItemDivider,
      
      IonCard,
  IonButtons,
    IonContent,
    IonTitle, 
    IonItem,
    IonLabel,
    IonToolbar
  },
  setup () {
    const route = useRoute();
    
    console.log("la route parms accueil est: " + route.params.id );
    const {
          recetteRandom,
          getRecetteAuPif    
        } = avoirDataHome();
    
    getRecetteAuPif();
    const infoAccueil = recetteRandom;

        console.log('fetch data details');
    console.log('les details sont: ' + recetteRandom.toString());

    console.log('la recette accueil est: ' + recetteRandom.toString());





      return {
          infoAccueil
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