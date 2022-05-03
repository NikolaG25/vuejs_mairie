<template>
  <main id="geo_demo">
    <h1>Géographie/Démographie</h1>
    <div class="bandeau">
      <div class="panneau"><h2>Panneau en direct</h2></div>
      <div class="clic"><h2>En un clic</h2></div>
    </div>
    <div class="town">
      <p>Mathay est une ville située en France dans le département du
        Doubs en <strong>Bourgogne-Franche-Comté</strong>.
        La ville compte 2189 en 2019 (INSEE) nommés les Mathéens et les Mathéennes.
        Elle est située à 15 minutes de <strong>Montbéliard</strong>,
        à une heure de <strong>Besançon</strong>
        et possède un <strong>accès direct à l'A36</strong>. </p>
      <iframe width="100%" height="500px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/fr/map/mathay_735503?scaleControl=true&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false"></iframe><p><a href="//umap.openstreetmap.fr/fr/map/mathay_735503">Voir en plein écran</a></p>
      <!--                <img src="img/amp_mathay.png" alt="Map Mathay">-->
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

  </main>

</template>

<script>
export default {
  name: "geoDemo"
}
</script>

<style scoped>

</style>
