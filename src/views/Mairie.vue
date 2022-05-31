<template>
  <main id="mairie">
    <div class="info">
      <h1>Votre mairie</h1>

    </div>

    <div class="content">
      <bandeau/>
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
import bandeau from "@/components/Bandeau";

export default {
  name: "Mairie",
  components: {
    'bandeau': bandeau
  },
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
