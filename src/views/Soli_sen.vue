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
        <div class="lien_page ccas">
          <router-link to="/SoliSen/ccas">
            <img class="img_lien" src="@/assets/img/CCAS.jpg" alt="CCAS">
            <div class="text_page">
              <h2>CCAS</h2>
            </div>
          </router-link>
        </div>

        <div class="lien_page epic">
          <img class="img_lien" src="@/assets/img/epicerie.jpg" alt="Épicerie solidaire">
          <div class="text_page">
            <h2>Épicerie solidaire</h2>
          </div>
        </div>

        <div class="lien_page seniors">
          <img class="img_lien" src="@/assets/img/seniors.jpg" alt="Ateliers seniors">
          <div class="text_page">
            <h2>Ateliers seniors</h2>
          </div>

        </div>
      </div>
    </div>

  </main>

</template>

<script>
export default {
  name: "SoliSen"
}
</script>

<style scoped>

</style>
