<template>
  <div class="comp_cal">
    <div class="calendar">
      <div class="event" v-for="event in listeOrderByDate" :key="event.id">
        <div class="date">
          <p class="num_date">{{ event.acf.n_jour }}</p>
          <div>
            <p class="day_date">{{ event.acf.jour }}</p>
            <hr>
            <p class="month_date">{{ event.acf.mois }}</p>
          </div>
        </div>
        <div class="info_cal">
          <h2>{{ event.acf.intitule_evenement }}</h2>
          <p>{{ event.acf.horaire_lieu }}</p>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
import param from "@/param/param";

export default {
  name: "calAccueil",

  data() {
    return {
      listeEvent: []
    }
  },

  computed: {
    listeOrderByDate: function () {
      function compare(a, b) {
        let date_a = a.acf.date.split('/')
        let date_b = b.acf.date.split('/')

        let da = date_a[2] + "-" + date_a[1] + "-" + date_a[0]
        let db = date_b[2] + "-" + date_b[1] + "-" + date_b[0]

        let d1 = new Date(da)
        let d2 = new Date(b = db)

        console.log('d1', d1)
        console.log('d2', d2)

        if (d1.getUTCMonth() > d2.getUTCMonth()) {
          return 1
        } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
          return -1
        } else {
          //same month
          return d1.getUTCDate() - d2.getUTCDate()
        }
      }

      return this.listeEvent.sort(compare);
    }
  },

  created() {
    axios.get(param.host + "calendrier")
      .then(response => {
        this.listeEvent = response.data
        console.log('listeEvent', this.listeEvent)
      }).catch(error => console.log(error))

  }
}
</script>

<style scoped>
.comp_cal {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
