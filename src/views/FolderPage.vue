<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
  <ion-list>
    <ion-item v-for="item in donnees" :key="item.strMealThumb">
    <ion-item  @click="() => $router.push(`/detail/${item.idMeal}`)">
      <ion-thumbnail slot="start">
        <ion-img :src="item.strMealThumb"></ion-img>
      </ion-thumbnail>
      <ion-label>{{item.strMeal}}</ion-label>
    </ion-item>
    </ion-item>
  </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { IonButtons, IonContent,IonThumbnail,IonImg,IonList, IonItem,IonLabel, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import {RecetteItem} from '../interfaces/recette-model';
import { avoirRecList } from '../services/themealdb-service';
export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonLabel,
    IonList,
    IonItem,
    IonContent,
    IonHeader,
    IonThumbnail,
    IonMenuButton,
    IonImg,
    IonPage,
    IonTitle,
    IonToolbar
  },


// test
  setup(){
    const selectedIndex = ref(0); 
    const route = useRoute();
     console.log("la route parms est: " + route.params.id );
    const catChoisie = String(route.params.id);
    const  { recettesList, getRecettesParCat} = avoirRecList();
    console.log('la catégorie choisie est : '+catChoisie);

  //setTimeout(function(){console.log("loading 2 secondes")}, 2000);

    getRecettesParCat(catChoisie); 
    
    const donnees:RecetteItem[] = recettesList!.value!;
    console.log(donnees);
    return {
      selectedIndex,
      donnees
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
