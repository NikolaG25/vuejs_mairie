<template>
  <main id="paroisse_biblio">
    <h1>Paroisse/Bibliothèque</h1>

    <div class="content">

      <div class="bandeau">
        <div class="panneau"><h2>Panneau en direct</h2></div>
        <div class="clic"><h2>En un clic</h2></div>
      </div>

      <div class="infos_biblio_paroisse">
        <div class="infos_biblio">
          <h2>La bibliothèque de la ville</h2>
          <p>
            La bibliothèque municipale est située sur la place de l'église de la ville. Elle est gratuite
            pour les habitants de Mathay et est ouverte à tous le mercredi de 16h à 18h.
            <span class="block"></span>
            On compte plus de 3000 ouvrages à votre disposition. En 2018, 162 livres sont entrés dans le catalogue
            pour une valeur de 2800€ et la même année, 692 ouvrages son sortis 1856 fois.
            <span class="block"></span>
            On trouve dans la bibliothèque une salle pour les petits, décorée par les Francas, dans
            laquelle les enfants peuvent consulter sur place les revues qui les intéressent.

          </p>
        </div>

        <div class="infos_paroisse">
          <h2>La paroisse Notre Dame de Chatey</h2>
          <p>
            La paroisse de Mathay appartient au groupement de paroisses de Notre Dame de Chatey.
            <span class="block"></span>
            Cette paroisse fait partie du Doyenné de
            Pont de Roide - L'Isle sur le Doubs qui dépend du Diocèse de Belfort-Montbéliard
            <span class="block"></span>
            Le curé de la paroisse de Chatey est le Père Thierry Dubret depuis Août 2017.
            <span class="block"></span>
            Notre Dame de Chatey compte sept églises : Pont de Roide, Mathay, Bourguignon, Dampjoux,
            Solmont, Dambelin et Goux les Dambelin. Et trois chapelles à Mathay, Vermondans et Chatey
          </p>
          <div class="eglises">
            <div class="eglise">
              <h2>Église de Pont de Roide</h2>
              <img src="@/assets/img/eglise/Pont-de-Roide_eglise.jpg" alt="Église de Pont de Roide">
            </div>

            <div class="eglise">
              <h2>Église de Mathay</h2>
              <img src="@/assets/img/eglise.jpg" alt="Église de Mathay">
            </div>
            <div class="eglise">
              <h2>Église de Bourguignon</h2>
              <img src="@/assets/img/Bourguignon_Église_Sainte-Anne.jpg" alt="Église de Bourguignon">
            </div>
            <div class="eglise">
              <h2>Église de Dampjoux</h2>
              <img src="@/assets/img/eglise/dampjoux_eglise.jpg" alt="Église de Dampjoux">
            </div>
            <div class="eglise">
              <h2>Église de Solemont</h2>
              <img src="@/assets/img/eglise/solemont_eglise.jpg" alt="Église de Solemont">
            </div>
            <div class="eglise">
              <h2>Église de Dambelin</h2>
              <img src="@/assets/img/eglise/dambelin_eglise.jpg" alt="Église de Dambelin">
            </div>
            <div class="eglise">
              <h2>Église de Goux-Les-Dambelin</h2>
              <img src="@/assets/img/eglise/goux-les-dambelin.jpg" alt="Église de Goux-Les-Dambelin">
            </div>
          </div>


          <h2 style="margin-top: 40px">Calendrier des messes</h2>

          <div class="cal_messes calendar">
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
                <h2>Lieu : Église de Mathay - Horaires : 10h</h2>
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
                <h2>Lieu : Église de Mathay - Horaires : 10h</h2>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  </main>

</template>

<script>
export default {
  name: "paroisseBiblio"
}
</script>

<style scoped>

</style>
