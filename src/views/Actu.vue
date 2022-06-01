<template>
  <main>
    <div class="info">
      <h1>Toutes les actualités</h1>
    </div>

    <div class="content">
      <Bandeau/>
      <div class="liste_actus">
        <div class="actu" v-for="actu in this.listeActu" :key="actu.id">
          <h2>{{actu.acf.titre_de_lactu}}</h2>
          <div class="content_actu">
            <p v-for="txt in actu.acf.textes_de_lactu">{{txt.texte_de_lactu}}</p>
            <img class="card_shadow" :src="actu.acf.image_de_lactu.url" :alt="actu.acf.titre_de_lactu">
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script>
import bandeau from "@/components/Bandeau";
import param from "@/param/param";
export default {
  name: "Actu",
  components: {
    'Bandeau': bandeau
  },


  data () {
    return {
      listeActu: []
    }
  },

  created() {

    axios.get(param.host+'actualites')
      .then(response => {
        this.listeActu = response.data
        console.log('liste actu', this.listeActu)
      }).catch(error => console.log(error))
  }
}
</script>

<style scoped>
  .content_actu {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .content_actu img {
    width: 250px;
    margin: 20px;
    padding: 0;
  }
  .content_actu p {
    width: 60%;
  }

</style>
