<template>
  <main id="enfance">
    <div class="info">
      <h1>Enfance/jeunesse</h1>
    </div>

    <div class="content">
      <div class="bandeau">
        <iframe id="myiFrame" class="myiFrame" width="480" height="600" src="https://player.centaure-systems.fr/embedded/1039951bfa96267e491fd0113608350bec05aeb4"></iframe>
        <div class="clic"><h2>En un clic</h2></div>
      </div>
      <div class="pages_enfance pages">
        <div class="lien_page" v-for="page in listePageEnfance" :key="page.id">
          <router-link :to="{name : 'pageConstructorEnfance', params : {id : page.id}}">
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
  name: "Enfance",

  data () {
    return {
      listePageEnfance : []
    }
  },

  created() {
    axios.get(param.host+"pages_enfance")
      .then(response => {
        // console.log('response', response.data)
        this.listePageEnfance = response.data
        console.log('liste page enfance', this.listePageEnfance)
      }).catch(error => console.log(error))

  }
}
</script>

<style scoped>

</style>
