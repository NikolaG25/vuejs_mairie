<template>
  <main id="mairie">
    <div class="info">
      <h1>Votre mairie</h1>

    </div>

    <div class="content">
      <div class="bandeau">
        <div class="panneau"><h2>Panneau en direct</h2></div>
        <div class="clic"><h2>En un clic</h2></div>
      </div>
      <div class="pages_mairie pages">

        <div class="lien_page elus">

          <router-link to="/Mairie/Elus" >
          <img class="img_lien" src="@/assets/img/tresor_mathay.jpg" alt="Les élus">
            <div class="text_page">
              <h2>Les élus</h2>
            </div>
          </router-link>


        </div>

        <div class="lien_page commi">
          <img class="img_lien" src="@/assets/img/tresor_mathay.jpg" alt="Commissions">
          <div class="text_page">
            <h2>Commissions</h2>
          </div>
        </div>
        <div class="lien_page serv_muni">

          <router-link to="/Mairie/servicesMunicipaux" >
            <img class="img_lien" src="@/assets/img/tresor_mathay.jpg" alt="Services municipaux">
            <div class="text_page">
              <h2>Services municipaux</h2>
            </div>
          </router-link>


        </div>
        <div class="lien_page seance_cons">

          <router-link to="/Mairie/seancesConseil" >
            <img class="img_lien" src="@/assets/img/tresor_mathay.jpg" alt="Séances du conseil">
            <div class="text_page">
              <h2>Séances du conseil</h2>
            </div>
          </router-link>


        </div>
        <div class="lien_page arretes">
          <img class="img_lien" src="@/assets/img/tresor_mathay.jpg" alt="Arrêtés en cours">
          <div class="text_page">
            <h2>Arrêtés en cours</h2>
          </div>

        </div>
        <div class="lien_page marche">
          <img class="img_lien" src="@/assets/img/tresor_mathay.jpg" alt="Marchés publics">
          <div class="text_page">
            <h2>Marchés publics</h2>
          </div>

        </div>
      </div>
    </div>

  </main>

</template>

<script>
export default {
  name: "Mairie"
}
</script>

<style scoped>

</style>
