<template>
  <div class="actus slider">
    <img class="arrow_l arrows prev" src="@/assets/img/icones/fleche_gauche.svg" alt="Actualité précédente">
    <div class="actu" v-for="actu in this.listeActu" :key="actu.id">
      <img :src="actu.acf.image_de_lactu.url" :alt="actu.acf.titre_de_lactu" class="img_actu">
      <div class="text_actu">
        <h2>{{actu.acf.titre_de_lactu}}</h2>
        <p>{{actu.acf.description_de_lactu}}</p>
        <router-link to="/Actu"><p class="see_more">Voir plus ></p></router-link>
      </div>
    </div>
    <img class="arrow_r arrows next" src="@/assets/img/icones/fleche_gauche.svg" alt="Actualité précédente">

  </div>

</template>

<script>



import param from "@/param/param";
export default {
  name: "Slider",
  data() {
    return {
      listeActu: [],
      divArray: []
    }
  },

  created (){


    axios.get(param.host+'actualites')
      .then(response => {
        this.listeActu = response.data
        // console.log('liste actu', this.listeActu)
      }).catch(error => console.log(error))

  },

  updated() {
    let divSlider = document.getElementsByClassName("actu")

    // console.log('divSlider',divSlider)

    let firstNews = divSlider.item(0)
    // console.log('first news', firstNews)
    firstNews.classList.add('active')

    let etape = 0

    let nbr_news = divSlider.length

    let prev = document.querySelector('.prev')
    let next = document.querySelector('.next')

    function enleverActiveImg() {
      for (let i = 0; i<nbr_news; i++) {
        divSlider[i].classList.remove('active')
      }
    }

    next.addEventListener('click', function (){
      etape++
      if(etape >= nbr_news) {
        etape = 0
      }
      enleverActiveImg()
      divSlider[etape].classList.add('active')
    })

    prev.addEventListener('click', function (){
      etape--
      if(etape < 0) {
        etape = nbr_news - 1
      }
      enleverActiveImg()
      divSlider[etape].classList.add('active')
    })

    setInterval(function (){
      etape++
      if(etape >= nbr_news) {
        etape = 0
      }
      enleverActiveImg()
      divSlider[etape].classList.add('active')
    }, 7000)
    }



}
</script>

<style scoped>

</style>
