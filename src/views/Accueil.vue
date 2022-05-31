<template>
  <main id="home">

    <div class="news">
      <h1>Les actualités</h1>
      <Slider/>
    </div>

    <div class="cal">
      <h1>Le calendrier</h1>
      <cal-accueil/>
      <router-link to="/Calendrier">Voir tout le calendrier</router-link>

    </div>



    <div class="city">
      <h1 style="margin-top: 50px">La ville</h1>
      <div class="town">
        <p>Mathay est une ville située en France dans le département du
          Doubs en <strong>Bourgogne-Franche-Comté</strong>.
          La ville compte 2189 en 2019 (INSEE) nommés les Mathéens et les Mathéennes.
          Elle est située à 15 minutes de <strong>Montbéliard</strong>,
          à une heure de <strong>Besançon</strong>
          et possède un <strong>accès direct à l'A36</strong>. </p>
        <iframe width="100%" height="500px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/fr/map/mathay_735503?scaleControl=true&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false"></iframe><p><a href="//umap.openstreetmap.fr/fr/map/mathay_735503">Voir en plein écran</a></p>
        <p>
          Autres informations :
          <span class="block"></span>
          Intercommunalité : Pays de Montbéliard Agglomération
          <span class="block"></span>

          Code postal : 25700
          <span class="block"></span>

          Superficie : 14.85km²
          <span class="block"></span>

          Altitude : entre 330 et 551 mètres
          <span class="block"></span>

          Latitude : 47° 26' 16" Nord
          <span class="block"></span>

          Longitude : 6° 47' 02" Est
        </p>
      </div>
    </div>



  </main>

</template>

<script>
import Slider from "@/components/Slider";
import calAccueil from "@/components/calAccueil";
export default {
  name: 'Accueil',
  components: {
    "Slider": Slider,
    "calAccueil": calAccueil
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
