<template>
  <div id="app">
    <header>
      <router-link to="/"><img class="blason" src="@/assets/img/blason_mathay.png" alt="Blason de Mathay"></router-link>

      <div class="nav_mob">
        <div class="nav-toggle" onclick='document.documentElement.classList.toggle("menu-open")'>
          <div class="nav-toggle-bar"></div>
        </div>
        <div class="menu">

          <ul>
            <li>
              <router-link to="/Village" class="link_header">Votre village</router-link>
            </li>
            <li>
              <router-link to="/Mairie" class="link_header">Votre mairie</router-link>
            </li>
            <li>
              <router-link to="/Demarches" class="link_header">Vos démarches</router-link>
            </li>
            <li>
              <router-link to="/Enfance" class="link_header">Enfance/jeunesse</router-link>
            </li>
            <li>
              <router-link to="/VieLocale" class="link_header">Vie locale</router-link>
            </li>
            <li>
              <router-link to="/SoliSen" class="link_header">Solidarité/seniors</router-link>
            </li>
            <li>
              <router-link to="/Contact" class="link_header">Contact</router-link>
            </li>
          </ul>

        </div>
      </div>

      <div class="nav_desk">
        <ul>
          <li>
            <router-link class="link_village link_desk" to="/Village">Votre village</router-link>
          </li>
          <li>
            <router-link class="link_mairie link_desk" to="/Mairie">Votre mairie</router-link>
          </li>
          <li>
            <router-link class="link_demarches link_desk" to="/Demarches">Vos démarches</router-link>
          </li>
          <li>
            <router-link class="link_enfance link_desk" to="/Enfance">Enfance/jeunesse</router-link>
          </li>
          <li>
            <router-link class="link_vie link_desk" to="/VieLocale">Vie locale</router-link>
          </li>
          <li>
            <router-link class="link_soli link_desk" to="/SoliSen">Solidarité/seniors</router-link>
          </li>
          <li>
            <router-link class="link_contact link_desk" to="/Contact">Contact</router-link>
          </li>
        </ul>

      </div>

    </header>

    <router-view/>

    <footer>
      <div class="contact_footer">
        <h1>Contact</h1>
        <p>Adresse : {{ this.listeInfoContact[0].adresse }}</p>
        <p>Tél : &nbsp;|&nbsp;<a v-for="n_tel in this.listeInfoContact[0].numeros_tel"
                    :href="'tel:'+n_tel.numero_tel">{{ n_tel.numero_tel }}</a>&nbsp;|&nbsp;</p>
        <p>Tél : &nbsp;|&nbsp;<a v-for="faxs in this.listeInfoContact[0].faxs"
                    :href="'tel:'+faxs.fax">{{ faxs.fax }}</a>&nbsp;|&nbsp;</p>
        <p>Email : &nbsp;|&nbsp;<a v-for="mail in this.listeInfoContact[0].emails"
                    :href="'mailto:'+mail.email">{{ mail.email }}</a>&nbsp;|&nbsp;</p>

      </div>
      <div class="horaires_footer">
        <h1>Horaires</h1>
        <p v-for="bloc_horaire in this.listeInfoHoraires[0].blocs_dhoraires">
          {{bloc_horaire.bloc_dhoraire}}
        </p>
      </div>
      <div class="plan_site_footer">
        <router-link to="/PlanDuSite">
          <h1>Plan du site</h1>
        </router-link>
      </div>

      <div class="mention_footer">
        <router-link to="/mentionsLegales">
          <h1>Mentions légales</h1>

        </router-link>
      </div>

    </footer>

  </div>
</template>

<script>
import param from "./param/param";

export default {
  name: 'App',
  data() {
    return {
      listeInfosFooter: [],
      listeInfoContact: [],
      listeInfoHoraires: []
    }
  },

  created() {

    axios.get(param.host + 'info_pied_de_page')
      .then(response => {
          this.listeInfosFooter = response.data
          // console.log("liste info footer", this.listeInfosFooter)

          for (let i = 0; i < this.listeInfosFooter.length; i++) {
            let type_bloc = this.listeInfosFooter[i].acf.type_zone;

            if (type_bloc === 'Horaires') {
              this.listeInfoHoraires.push(this.listeInfosFooter[i].acf.zone_dhoraires_footer)
            }
            if (type_bloc === 'Contact') {
              this.listeInfoContact.push(this.listeInfosFooter[i].acf.zone_contact)
            }

          }

          // console.log('listeHoraires', this.listeInfoHoraires)
          // console.log('listeContact', this.listeInfoContact)

        // console.log('contact', this.listeInfoContact[0].acf)
        }
      ).catch(error => console.log(error))
  }
}
</script>
