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
          <p v-if="event.acf.lieu_evenement !==''">Lieu : {{ event.acf.lieu_evenement }}</p>
          <p v-if="event.acf.horaire_evenement !==''">Horaires : {{event.acf.horaire_evenement}}</p>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
import param from "@/param/param";
import moment from 'moment'

export default {
  name: "calAccueil",

  data() {
    return {
      listeEvent: [],
    }
  },

  computed: {
    listeOrderByDate: function () {
      function compare(a, b) {

        let nj_a = a.acf.n_jour
        let mois_a = a.acf.mois
        let annee_a = a.acf.annee

        let nj_b = b.acf.n_jour
        let mois_b = b.acf.mois
        let annee_b = b.acf.annee

        // console.log('nj', nj)
        // console.log('mois', mois)

        if(mois_a === 'Janvier')        mois_a = 'January'
        if(mois_a === 'Février')        mois_a = 'February'
        if(mois_a === 'Mars')           mois_a = 'March'
        if(mois_a === 'Avril')          mois_a = 'April'
        if(mois_a === 'Mai')            mois_a = 'May'
        if(mois_a === 'Juin')           mois_a = 'June'
        if(mois_a === 'Juillet')        mois_a = 'July'
        if(mois_a === 'Août')           mois_a = 'August'
        if(mois_a === 'Septembre')      mois_a = 'September'
        if(mois_a === 'Octobre')        mois_a = 'October'
        if(mois_a === 'Novembre')       mois_a = 'November'
        if(mois_a === 'Décembre')       mois_a = 'December'

        if(mois_b === 'Janvier')        mois_b = 'January'
        if(mois_b === 'Février')        mois_b = 'February'
        if(mois_b === 'Mars')           mois_b = 'March'
        if(mois_b === 'Avril')          mois_b = 'April'
        if(mois_b === 'Mai')            mois_b = 'May'
        if(mois_b === 'Juin')           mois_b = 'June'
        if(mois_b === 'Juillet')        mois_b = 'July'
        if(mois_b === 'Août')           mois_b = 'August'
        if(mois_b === 'Septembre')      mois_b = 'September'
        if(mois_b === 'Octobre')        mois_b = 'October'
        if(mois_b === 'Novembre')       mois_b = 'November'
        if(mois_b === 'Décembre')       mois_b = 'December'




        let ta = moment(annee_a+' ' + mois_a+ ' '+nj_a, 'YYYY MMM DD', 'en')
        // console.log('ta', ta)
        let tb = moment(annee_b+' ' + mois_b+ ' '+nj_b, 'YYYY MMM DD', 'en')
        // console.log('tb', tb)

        let da = new Date(ta)
        // console.log('da', da)
        let db = new Date(tb)
        // console.log('db', db)

        if (da.getUTCMonth() > db.getUTCMonth()) {
          return 1
        } else if (da.getUTCMonth() < db.getUTCMonth()) {
          return -1
        } else {
          //same month
          return da.getUTCDate() - db.getUTCDate()
        }
      }

      return this.listeEvent.sort(compare);
    }
  },

  created() {
    axios.get(param.host + "calendrier")
      .then(response => {
        this.listeEvent = response.data
        // console.log('listeEvent', this.listeEvent)
      }).catch(error => console.log(error))
  },

}
</script>

<style scoped>
.comp_cal {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
