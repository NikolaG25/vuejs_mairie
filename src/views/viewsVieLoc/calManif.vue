<template>
  <main id="paroisse_biblio">
    <h1>Calendrier des manifestations</h1>

    <div class="content">

      <div class="bandeau">
        <div class="panneau"><h2>Panneau en direct</h2></div>
        <div class="clic"><h2>En un clic</h2></div>
      </div>

      <div class="cal_manif calendar">
        <div class="first_event event">
          <div class="date">
            <p class="num_date">03</p>
            <div>
              <p class="day_date">Dimanche</p>
              <hr>
              <p class="month_date">Décembre</p>
            </div>
          </div>
          <div class="info_cal">
            <h2>Lieu : Salle polyvalente Mathay - Horaires : 10h - 15h</h2>
          </div>
        </div>
        <div class="first_event event">
          <div class="date">
            <p class="num_date">10</p>
            <div>
              <p class="day_date">Dimanche</p>
              <hr>
              <p class="month_date">Décembre</p>
            </div>
          </div>
          <div class="info_cal">
            <h2>Lieu : Salle polyvalente Mathay - Horaires : 10h - 17h</h2>
          </div>
        </div>

      </div>

    </div>

  </main>

</template>

<script>
export default {
  name: "calManif"
}
</script>

<style scoped>

</style>
