<template>
  <div>

      <div class="bloc_txt" v-for="bloc_txt in zone_txt.bloc_de_texte" :key="bloc_txt.titre">
        <h2>{{bloc_txt.titre}}</h2>
        <p>{{bloc_txt.paragraphe}}</p>
      </div>

  </div>

</template>

<script>
export default {
  name: "textZone"
}
</script>

<style scoped>

</style>
