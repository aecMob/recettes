<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
      <ion-content v-if="state.loading">
      <div class="loading-center">
        <ion-spinner color="primary"></ion-spinner>
      </div>
      </ion-content>
        <ion-content v-else>

          <ion-list id="inbox-list">
            <ion-list-header>Nos Recettes</ion-list-header>
            <ion-note>Naoufel & Jean-François</ion-note>
            
            <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon slot="start" :src= "p.iosIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane, onIonViewWillEnter } from '@ionic/vue';
import { defineComponent, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, heartOutline, heartSharp, homeOutline, homeSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { avoirCats, avoirCategories } from './services/themealdb-service';
import {Categorie, Categories} from './interfaces/categorie-model';





export default defineComponent({
  name: 'App',

  components: {
    IonApp, 
    IonContent, 
    IonIcon, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonListHeader, 
    IonMenu, 
    IonMenuToggle, 
    IonNote, 
    IonRouterOutlet, 
    IonSplitPane,
  },



  setup() {


      const selectedIndex = ref(0); 
      const state = reactive({
      categs: [] as Categorie[],
      loading: false,
      });

      const appPages = [{
        title: "Accueil",
        url: '/folder/Accueil',
        iosIcon: 'assets/icons/Accueil.svg',
        mdIcon: 'assets/icons/Accueil.svg'
      }];


     const fetchListeCategories = async () => {
      state.loading = true;
      const { categoriesList, getCategories} = avoirCategories();    
      await getCategories();

      if (categoriesList) {
        state.categs = categoriesList!.value!;
        for (let i = 0 ; i < state.categs.length ; i++) {
          const uneCat =     {
          title: state.categs[i].strCategory,
          url: '/recette/'+state.categs[i].strCategory,
          iosIcon: 'assets/icons/'+state.categs[i].strCategory + '.svg',
          mdIcon: 'assets/icons/'+state.categs[i].strCategory+ '.svg'
      }
      appPages.push(uneCat);
      }  

      }

      state.loading = false;
    };

fetchListeCategories();

    //const cats = ["Beef","Breakfast","Chicken","Dessert","Goat","Lamb","Miscellaneous","Pasta","Pork","Seafood","Side","Starter","Vegan","Vegetarian"];


  console.log('apppage :' + appPages);

   let path = window.location.pathname.split('recette/' || 'folder/')[1];
   // const pathhome = window.location.pathname.split('folder/')[1];
    console.log('le path est :' + path );
    if (path !== undefined ) {

      selectedIndex.value = appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
      
    }  
    
    console.log(selectedIndex.value + "  la valeur de l'index") ; 
    const route = useRoute();
    const router =useRouter();

    console.log("la route parms est: " + route.params.id );
    
    return { 
      selectedIndex,
      state,
      appPages, 
      archiveOutline, 
      archiveSharp, 
      bookmarkOutline, 
      bookmarkSharp, 
      heartOutline, 
      heartSharp, 
      mailOutline, 
      mailSharp, 
      paperPlaneOutline, 
      paperPlaneSharp, 
      trashOutline, 
      trashSharp, 
      warningOutline, 
      warningSharp,
      isSelected: (url: string) => url === route.path ? 'selected' : ''
    }
  }
});
</script>


<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
