<template>
  <main id="seances_conseil">
    <h1>Séances du conseil</h1>

    <div class="content">
      <div class="bandeau">
        <div class="panneau"><h2>Panneau en direct</h2></div>
        <div class="clic"><h2>En un clic</h2></div>
      </div>
      <div class="recap_seance">
        <div class="seance fiche_pdf">
          <h2>Séance du 17 Mai</h2>

          <div class="link_pdf">
            <a href="@/assets/pdf/notre-dame-la-blanche.pdf" target="_blank">Voir le PDF</a>

            <a href="@/assets/pdf/notre-dame-la-blanche.pdf" download>Télécharger le PDF</a>
          </div>

        </div>
        <div class="seance fiche_pdf">
          <h2>Séance du 20 Juin</h2>

          <div class="link_pdf">
            <a href="@/assets/pdf/notre-dame-la-blanche.pdf" target="_blank">Voir le PDF</a>

            <a href="@/assets/pdf/notre-dame-la-blanche.pdf" download>Télécharger le PDF</a>
          </div>

        </div>


      </div>

    </div>

  </main>

</template>

<script>
export default {
  name: "seancesConseil"
}
</script>

<style scoped>

</style>
