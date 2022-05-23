<template>
  <main id="seniors">
    <div class="info">
      <h1>Solidarité/seniors</h1>
    </div>

    <div class="content">
      <div class="bandeau">
        <div class="panneau"><h2>Panneau en direct</h2></div>
        <div class="clic"><h2>En un clic</h2></div>
      </div>
      <div class="pages_vie_loc pages">
        <div class="lien_page" v-for="page in listePageSoliSen" :key="page.id">
          <router-link :to="{name : 'pageConstructorSoliSen', params : {id : page.id}}">
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
  name: "SoliSen",

  data () {
    return {
      listePageSoliSen : []
    }
  },

  created() {
    axios.get(param.host+"pages_solidarite_sen")
      .then(response => {
        // console.log('response', response.data)
        this.listePageSoliSen = response.data
        console.log('liste page soli', this.listePageSoliSen)
      }).catch(error => console.log(error))

  }

}
</script>
