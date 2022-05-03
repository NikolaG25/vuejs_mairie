<template>
  <main id="demarches">
    <div class="info">
      <h1>Vos démarches</h1>
    </div>


    <div class="content">
      <div class="bandeau">
        <div class="panneau"><h2>Panneau en direct</h2></div>
        <div class="clic"><h2>En un clic</h2></div>
      </div>
      <div class="pages_demarches pages">
        <div class="lien_page dem_adm">
          <router-link to="/Demarches/demarchesAdmin">
            <img class="img_lien" src="@/assets/img/demarche.jpg" alt="Démarches administratives">
            <div class="text_page">
              <h2>Démarches administratives</h2>
            </div>
          </router-link>


        </div>

        <div class="lien_page loc_salle">

          <router-link to="/Demarches/locSalle">
            <img class="img_lien" src="@/assets/img/salle.jpg" alt="Location de salles">
            <div class="text_page">
              <h2>Location de salles</h2>
            </div>
          </router-link>

        </div>

        <div class="lien_page urba">
          <router-link to="/Demarches/Urbanisme">
            <img class="img_lien" src="@/assets/img/eglise.jpg" alt="Urbanisme">
            <div class="text_page">
              <h2>Urbanisme</h2>
            </div>
          </router-link>


        </div>

        <div class="lien_page dechet">
          <img class="img_lien" src="@/assets/img/waste.jpg" alt="Déchets/encombrants">
          <div class="text_page">
            <h2>Déchets/encombrants</h2>
          </div>

        </div>

        <div class="lien_page cim">
          <img class="img_lien" src="@/assets/img/cimetiere.jpg" alt="Cimetière">
          <div class="text_page">
            <h2>Cimetière</h2>
          </div>

        </div>

        <div class="lien_page affouage">
          <img class="img_lien" src="@/assets/img/affouage.jpg" alt="Affouage">
          <div class="text_page">
            <h2>Affouage</h2>
          </div>

        </div>



      </div>
    </div>

  </main>

</template>

<script>
export default {
  name: "Demarches"
}
</script>

<style scoped>

</style>
