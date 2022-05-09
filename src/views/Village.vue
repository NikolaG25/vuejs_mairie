<template>
  <main id="town">
    <div class="info">
      <h1>Votre ville</h1>
     </div>


    <div class="content">
      <div class="bandeau">
        <div class="panneau"><h2>Panneau en direct</h2></div>
        <div class="clic"><h2>En un clic</h2></div>
      </div>
      <div class="pages_ville pages">
        <div class="lien_page tres">
          <router-link to="/Village/Histoire">
            <img class="img_lien" src="@/assets/img/tresor_mathay.jpg" alt="Trésor de Mathay">

            <div class="text_page">
              <h2>Trésor/Histoire</h2>
            </div>
          </router-link>
        </div>

        <div class="lien_page geo">

          <router-link to="/Village/geoDemo" >
            <img class="img_lien" src="@/assets/img/amp_mathay.png" alt="Map Mathay">

            <div class="text_page">
              <h2>Géo/démographie</h2>
            </div>
          </router-link>

        </div>
        <div class="lien_page see">

          <router-link to="/Village/queVoirFaire">
            <img class="img_lien" src="@/assets/img/eglise.jpg" alt="Église">

            <div class="text_page">
              <h2>Que voir/faire ?</h2>
            </div>
          </router-link>


        </div>
        <div class="lien_page info_dialogue">
          <router-link to="/Village/mathayInfoDialogue">
            <img class="img_lien" src="@/assets/img/dialogue2012.jpg" alt="Mathay Info/Dialogue">

            <div class="text_page">
              <h2>Mathay Info/Dialogue</h2>
            </div>
          </router-link>
        </div>

      </div>
    </div>


  </main>

</template>

<script>
export default {
  name: "Village"
}
</script>

<style scoped>

</style>
