<template>
  <main id="town">
    <div class="info">
      <h1>Votre ville</h1>
     </div>


    <div class="content">
      <bandeau/>
      <div class="pages_ville pages">
        <div class="lien_page" v-for="page in listePageVillage" :key="page.id">
          <router-link :to="{name : 'pageConstructorVillage', params : {id : page.id}}">
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
import bandeau from "@/components/Bandeau";
import param from "@/param/param";

export default {
  name: "Village",

  components: {
    'bandeau': bandeau
  },

  data () {
    return {
      listePageVillage : []
    }
  },

  created() {
    axios.get(param.host+"pages_village")
      .then(response => {
        // console.log('response', response.data)
        this.listePageVillage = response.data
        // console.log('liste page village', this.listePageVillage)
      }).catch(error => console.log(error))

  }

}
</script>
