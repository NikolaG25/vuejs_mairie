<template>
  <main id="demarches">
    <div class="info">
      <h1>Vos démarches</h1>
    </div>


    <div class="content">
      <bandeau/>
      <div class="pages_demarches pages">
        <div class="lien_page" v-for="page in listePageDemarches" :key="page.id">
          <router-link :to="{name : 'pageConstructorDemarches', params : {id : page.id}}">
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
import bandeau from "@/components/Bandeau";
export default {
  name: "Demarches",

  components: {
    'bandeau': bandeau
  },

  data () {
    return {
      listePageDemarches : []
    }
  },

  created() {
    axios.get(param.host+"pages_demarches")
      .then(response => {
        // console.log('response', response.data)
        this.listePageDemarches = response.data
        // console.log('liste page démarches', this.listePageDemarches)
      }).catch(error => console.log(error))

  }

}
</script>

<style scoped>

</style>
