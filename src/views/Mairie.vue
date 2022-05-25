<template>
  <main id="mairie">
    <div class="info">
      <h1>Votre mairie</h1>

    </div>

    <div class="content">
      <div class="bandeau">
        <iframe id="myiFrame" class="myiFrame" width="480" height="600" src="https://player.centaure-systems.fr/embedded/1039951bfa96267e491fd0113608350bec05aeb4"></iframe>
        <div class="clic"><h2>En un clic</h2></div>
      </div>
      <div class="pages_mairie pages">

        <div class="lien_page" v-for="page in listePageMairie" :key="page.id">
          <router-link :to="{name : 'pageConstructorMairie', params : {id : page.id}}">
            <img class="img_lien" :src="page.acf.info_page.image_de_la_page.url" :alt="page.acf.info_page.nom_de_la_page">

            <div class="text_page">
              <h2>{{page.acf.info_page.nom_de_la_page}}</h2>
            </div>
          </router-link>
        </div>

      </div>
    </div>

  </main>

</template>

<script>
import param from "@/param/param";

export default {
  name: "Mairie",

  data () {
    return {
      listePageMairie : []
    }
  },

  created() {
    axios.get(param.host+"pages_mairie")
      .then(response => {
        // console.log('response', response.data)
        this.listePageMairie = response.data
        console.log('liste page mairie', this.listePageMairie)
      }).catch(error => console.log(error))

  }
}
</script>

<style scoped>

</style>
