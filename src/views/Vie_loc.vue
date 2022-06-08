<template>
  <main id="vie_loc">
    <div class="info">
      <h1>Vie locale</h1>
    </div>

    <div class="content">
      <bandeau/>
      <div class="pages_vie_loc pages">
        <div class="lien_page" v-for="page in listePageVieLoc" :key="page.id">
          <router-link :to="{name : 'pageConstructorVieLocale', params : {id : page.id}}">
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
  name: "VieLocale",

  components: {
    'bandeau': bandeau
  },

  data () {
    return {
      listePageVieLoc : []
    }
  },

  created() {
    axios.get(param.host+"pages_vie_loc")
      .then(response => {
        // console.log('response', response.data)
        this.listePageVieLoc = response.data
        // console.log('liste page village', this.listePageVieLoc)
      }).catch(error => console.log(error))

  }

}
</script>

<style scoped>

</style>
