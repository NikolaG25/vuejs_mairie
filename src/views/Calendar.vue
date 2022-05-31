<template>
  <main>
    <div class="info">
      <h1>Calendrier</h1>
    </div>

    <div class="content">
      <bandeau/>
      <div class="liste_event">
        <cal-accueil/>
      </div>
    </div>



  </main>
</template>

<script>
import bandeau from "@/components/Bandeau";
import calAccueil from "@/components/calAccueil";
import param from "@/param/param";
export default {
  name: "Calendar",
  components: {
    'bandeau': bandeau,
    'calAccueil': calAccueil
  },

}
</script>

<style scoped>

</style>
