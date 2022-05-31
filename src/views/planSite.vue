<template>
  <main>
    <div class="info">
      <h1>Plan du site</h1>
    </div>

    <div class="content">
      <Bandeau/>
      <div class="plan">
        <router-link to="/Village">
          <h2>Votre village</h2>
        </router-link>
        <ul>
          <li v-for="page_village in listePageVillage">
            <router-link :to="{name : 'pageConstructorVillage', params: {id : page_village.id}}">
              <p>{{page_village.acf.info_page.nom_de_la_page}}</p>
            </router-link>
          </li>
        </ul>
        <router-link to="/Mairie">
          <h2>Votre mairie</h2>
        </router-link>
        <ul>
          <li v-for="page_mairie in listePageMairie">
            <router-link :to="{name : 'pageConstructorMairie', params: {id : page_mairie.id}}">
              <p>{{page_mairie.acf.info_page.nom_de_la_page}}</p>
            </router-link>
          </li>
        </ul>
        <router-link to="/Demarches">
          <h2>Vos démarches</h2>

        </router-link>
        <ul>
          <li v-for="page_dem in listePageDemarches">
            <router-link :to="{name : 'pageConstructorDemarches', params: {id : page_dem.id}}">
              <p>{{page_dem.acf.info_page.nom_de_la_page}}</p>
            </router-link>
          </li>
        </ul>
        <router-link to="/Enfance">
          <h2>Enfance/jeunesse</h2>

        </router-link>
        <ul>
          <li v-for="page_enf in listePageEnfance">
            <router-link :to="{name : 'pageConstructorEnfance', params: {id : page_enf.id}}">
              <p>{{page_enf.acf.info_page.nom_de_la_page}}</p>
            </router-link>
          </li>
        </ul>
        <router-link to="/VieLocale">
          <h2>Vie locale</h2>
        </router-link>
        <ul>
          <li v-for="page_vie_loc in listePageVieLoc">
            <router-link :to="{name : 'pageConstructorVieLocale', params: {id : page_vie_loc.id}}">
              <p>{{page_vie_loc.acf.info_page.nom_de_la_page}}</p>
            </router-link>
          </li>
        </ul>

        <router-link to="/SoliSen">
          <h2>Solidarité/seniors</h2>

        </router-link>
        <ul>
          <li v-for="page_soli in listePageSoliSen">
            <router-link :to="{name : 'pageConstructorSoliSen', params: {id : page_soli.id}}">
              <p>{{page_soli.acf.info_page.nom_de_la_page}}</p>
            </router-link>
          </li>
        </ul>
        <router-link to="/Contact">
          <h2>Contact</h2>
        </router-link>


      </div>
    </div>
  </main>
</template>

<script>
import bandeau from "@/components/Bandeau";
import param from "@/param/param";
export default {
  name: "planSite",
  components: {
    'Bandeau': bandeau
  },

  data () {
    return {
      listePageVillage: [],
      listePageMairie: [],
      listePageDemarches: [],
      listePageEnfance: [],
      listePageVieLoc: [],
      listePageSoliSen: [],
    }
  },

  created() {
    axios.get(param.host+"pages_mairie")
      .then(response => {
        // console.log('response', response.data)
        this.listePageMairie = response.data
        console.log('liste page mairie', this.listePageMairie)
      }).catch(error => console.log(error))

    axios.get(param.host+"pages_enfance")
      .then(response => {
        // console.log('response', response.data)
        this.listePageEnfance = response.data
        console.log('liste page enfance', this.listePageEnfance)
      }).catch(error => console.log(error))

    axios.get(param.host+"pages_demarches")
      .then(response => {
        // console.log('response', response.data)
        this.listePageDemarches = response.data
        console.log('liste page démarches', this.listePageDemarches)
      }).catch(error => console.log(error))

    axios.get(param.host+"pages_solidarite_sen")
      .then(response => {
        // console.log('response', response.data)
        this.listePageSoliSen = response.data
        console.log('liste page soli', this.listePageSoliSen)
      }).catch(error => console.log(error))

    axios.get(param.host+"pages_vie_loc")
      .then(response => {
        // console.log('response', response.data)
        this.listePageVieLoc = response.data
        console.log('liste page village', this.listePageVieLoc)
      }).catch(error => console.log(error))

    axios.get(param.host+"pages_village")
      .then(response => {
        // console.log('response', response.data)
        this.listePageVillage = response.data
        console.log('liste page village', this.listePageVillage)
      }).catch(error => console.log(error))

  }

}
</script>

<style scoped>

</style>
