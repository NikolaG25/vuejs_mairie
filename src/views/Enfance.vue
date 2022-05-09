<template>
  <main id="enfance">
    <div class="info">
      <h1>Enfance/jeunesse</h1>
    </div>

    <div class="content">
      <div class="bandeau">
        <div class="panneau"><h2>Panneau en direct</h2></div>
        <div class="clic"><h2>En un clic</h2></div>
      </div>
      <div class="pages_enfance pages">
        <div class="lien_page school">
          <router-link to="/Enfance/Ecoles">
            <img class="img_lien" src="@/assets/img/ecole.jpg" alt="Les écoles">
            <div class="text_page">
              <h2>Les écoles</h2>
            </div>
          </router-link>


        </div>

        <div class="lien_page peri">

          <router-link to="/Enfance/periscoRestMer">
            <img class="img_lien" src="@/assets/img/perisco.jpg" alt="Périscolaire, restauration et mercredis">
            <div class="text_page">
              <h2>Périscolaires, restauration et mercredis</h2>
            </div>
          </router-link>

        </div>


        <div class="lien_page centre">
          <img class="img_lien" src="@/assets/img/loisirs.jpg" alt="Centre de loisirs">
          <div class="text_page">
            <h2>Centre de loisirs</h2>
          </div>

        </div>
        <div class="lien_page house">
          <img class="img_lien" src="@/assets/img/tresor_mathay.jpg" alt="Maison des jeunes">
          <div class="text_page">
            <h2>Maison des jeunes</h2>
          </div>

        </div>
        <div class="lien_page little">
          <img class="img_lien" src="@/assets/img/tresor_mathay.jpg" alt="Petite enfance">
          <div class="text_page">
            <h2>Petite enfance</h2>
          </div>

        </div>
      </div>
    </div>

  </main>

</template>

<script>
export default {
  name: "Enfance"
}
</script>

<style scoped>

</style>
