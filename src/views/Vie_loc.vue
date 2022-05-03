<template>
  <main id="vie_loc">
    <div class="info">
      <h1>Vie locale</h1>
    </div>

    <div class="content">
      <div class="bandeau">
        <div class="panneau"><h2>Panneau en direct</h2></div>
        <div class="clic"><h2>En un clic</h2></div>
      </div>
      <div class="pages_vie_loc pages">
        <div class="lien_page rest">
          <router-link to="/VieLocale/restaurantsBars">
            <img class="img_lien" src="@/assets/img/christis.jpg" alt="Restaurants/bars">
            <div class="text_page">
              <h2>Restaurants/bars</h2>
            </div>
          </router-link>

        </div>

        <div class="lien_page asso">
          <router-link to="/VieLocale/Associations">
            <img class="img_lien" src="@/assets/img/asso.jpg" alt="Associations">
            <div class="text_page">
              <h2>Associations</h2>
            </div>
          </router-link>

        </div>

        <div class="lien_page commerces">
          <router-link to="/VieLocale/Commerces" >
            <img class="img_lien" src="@/assets/img/colruyt.jpg" alt="Commerces/entreprises/artisans">
            <div class="text_page">
              <h2>Commerces/ entreprises/artisans</h2>
            </div>
          </router-link>


        </div>

        <div class="lien_page pro_health">
          <router-link to="/VieLocale/proSante" >
            <img class="img_lien" src="@/assets/img/medecin.jpg" alt="Professionnels de santé">
            <div class="text_page">
              <h2>Professionnels de santé</h2>
            </div>
          </router-link>


        </div>

        <div class="lien_page paroisse">
          <router-link to="/VieLocale/paroisseBiblio" >
            <img class="img_lien" src="@/assets/img/eglise.jpg" alt="Paroisse">
            <div class="text_page">
              <h2>Paroisse/Bibliothèque</h2>
            </div>
          </router-link>
        </div>

        <div class="lien_page transport">
          <router-link to="/VieLocale/Transports" >
            <img class="img_lien" src="@/assets/img/evolity.jpg" alt="Transports">
            <div class="text_page">
              <h2>Transports</h2>
            </div>
          </router-link>


        </div>


        <div class="lien_page calendar_event">
          <router-link to="/VieLocale/calManif" >
            <img class="img_lien" src="@/assets/img/calendrier.jpg" alt="Calendrier des manifestations">
            <div class="text_page">
              <h2>Calendrier des manifestations</h2>
            </div>
          </router-link>


        </div>

      </div>
    </div>

  </main>

</template>

<script>
export default {
  name: "VieLocale"
}
</script>

<style scoped>

</style>
