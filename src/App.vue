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
            <li><router-link to="/Village" class="link_header">Votre village</router-link></li>
            <li><router-link to="/Mairie" class="link_header">Votre mairie</router-link></li>
            <li><router-link to="/Demarches" class="link_header">Vos démarches</router-link></li>
            <li><router-link to="/Enfance" class="link_header">Enfance/jeunesse</router-link></li>
            <li><router-link to="/VieLocale" class="link_header">Vie locale</router-link></li>
            <li><router-link to="/SoliSen" class="link_header">Solidarité/seniors</router-link></li>
            <li><router-link to="/Contact" class="link_header">Contact</router-link></li>
          </ul>

        </div>
      </div>

      <div class="nav_desk">
        <ul>
          <li><router-link class="link_village link_desk" to="/Village">Votre village</router-link></li>
          <li><router-link class="link_mairie link_desk" to="/Mairie">Votre mairie</router-link></li>
          <li><router-link class="link_demarches link_desk" to="/Demarches">Vos démarches</router-link></li>
          <li><router-link class="link_enfance link_desk" to="/Enfance">Enfance/jeunesse</router-link></li>
          <li><router-link class="link_vie link_desk" to="/VieLocale">Vie locale</router-link></li>
          <li><router-link class="link_soli link_desk" to="/SoliSen">Solidarité/seniors</router-link></li>
          <li><router-link class="link_contact link_desk" to="/Contact">Contact</router-link></li>
        </ul>

      </div>

    </header>

    <router-view/>

    <footer>
      <div class="contact_footer">
        <h1>Contact</h1>
        <p>
          Adresse : 25 Rue de la Mairie, 25700 Mathay
          <span class="block"></span>

          Tél. : 03 81 35 27 20
          <span class="block"></span>

          Fax : 03 81 30 03 41
          <span class="block"></span>

          Email : mairie@mathay.fr
          <span class="block"></span>

          Formulaire de contact
        </p>
      </div>
      <div class="horaires_footer">
        <h1>Horaires</h1>
        <p>
          Du mardi au Vendredi :
          9h30-11h30 / 16h-18h
          <span class="block"></span>

          Deux samedis par mois :
          9h-11h
          <span class="block"></span>

          Fermé le lundi
        </p>
      </div>
      <h1>Plan du site</h1>
      <h1>Mentions légales</h1>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
