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

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { 
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonContent,  
  IonItem,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,  
  IonTitle, 
  IonToolbar,
  IonFooter,
onIonViewDidEnter,
onIonViewWillEnter
} from '@ionic/vue';


export default defineComponent({
  name:'AccueilPage',  
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonTitle, 
    IonToolbar

  },
methods: {

},
  setup () {

      return {
     
  }}
})
</script>

<style scoped>

</style>