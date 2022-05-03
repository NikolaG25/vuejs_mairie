<template>
  <div id="app">
    <header>
      <a href="index.html"><img class="blason" src="img/blason_mathay.png" alt="Blason de Mathay"></a>

      <div class="nav_mob">
        <div class="nav-toggle" onclick='document.documentElement.classList.toggle("menu-open")'>
          <div class="nav-toggle-bar"></div>
        </div>
        <div class="menu">

          <ul>
            <li><a class="link_header" href="pages/village.html">Votre village</a></li>
            <li><a class="link_header" href="pages/mairie.html">Votre mairie</a></li>
            <li><a class="link_header" href="pages/demarches.html">Vos démarches</a></li>
            <li><a class="link_header" href="pages/enfance.html">Enfance/jeunesse</a></li>
            <li><a class="link_header" href="pages/vie_loc.html">Vie locale</a></li>
            <li><a class="link_header" href="pages/soli_sen.html">Solidarité/seniors</a></li>
            <li><a class="link_header" href="pages/contact.html">Contact</a></li>
          </ul>

        </div>
      </div>

      <div class="nav_desk">
        <ul>
          <li><a href="pages/village.html">Votre village</a></li>
          <li><a href="pages/mairie.html">Votre mairie</a></li>
          <li><a href="pages/demarches.html">Vos démarches</a></li>
          <li><a href="pages/enfance.html">Enfance/jeunesse</a></li>
          <li><a href="pages/vie_loc.html">Vie locale</a></li>
          <li><a href="pages/soli_sen.html">Solidarité/seniors</a></li>
          <li><a href="pages/contact.html">Contact</a></li>
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
      <div class="horaires">
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
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
