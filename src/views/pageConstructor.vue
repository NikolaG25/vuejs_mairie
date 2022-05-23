<template>
  <main>
    <h1>{{ this.page.info_page.nom_de_la_page }}</h1>

    <div class="content">
      <div class="bandeau">
        <div class="panneau"><h2>Panneau en direct</h2></div>
        <div class="clic"><h2>En un clic</h2></div>
      </div>

      <div class="grid">
        <div class="zoneTxt" v-for="zone_txt in listeZoneTxt" :key="zone_txt.titre" :style="{'grid-row': zone_txt.place_sur_la_grille}">

          <div class="bloc_txt" v-for="bloc_txt in zone_txt.bloc_de_texte" :key="bloc_txt.titre">
            <h2>{{bloc_txt.titre}}</h2>
            <p>{{bloc_txt.paragraphe}}</p>
          </div>
        </div>

        <div class="zoneFichier" v-for="zone_fichier in listeZoneFichier" :key="zone_fichier.titre" :style="{'grid-row': zone_fichier.place_sur_la_grille}">
          <div class="bloc_fichier" v-for="bloc_fichier in zone_fichier.bloc_fichier_zip_dossier" :key="bloc_fichier.titre">
            <h2>{{bloc_fichier.titre}}</h2>
            <p>{{bloc_fichier.paragraphes_avant_liste_fichiers_dossiers}}</p>
            <div class="liste_wrap">
              <div class="fiche_pdf" v-for="fiche_pdf in bloc_fichier.liste_fiches_fichier_zip_dossier" :key="fiche_pdf.titre_fichier_zip_dossier">
                <h2>{{fiche_pdf.titre_fichier_zip_dossier}}</h2>

                <div class="link_pdf">
                  <a :href="fiche_pdf.fichier_zip_dossier" target="_blank">Voir le PDF</a>

                  <a :href="fiche_pdf.fichier_zip_dossier" download>Télécharger le PDF</a>
                </div>

              </div>

            </div>
            <p>{{bloc_fichier.paragraphes_apres_liste_fichiers_dossiers}}</p>
          </div>
        </div>

        <div class="zoneHoraire" v-for="zone_horaire in listeZoneHoraire" :style="{'grid-row': zone_horaire.place_sur_la_grille}">
          <div class="bloc_horaire">
            <h2>{{zone_horaire.bloc_dhoraires.titre}}</h2>
            <div class="liste_wrap">
              <div class="horaires card_shadow" v-for="fiche_horaire in zone_horaire.bloc_dhoraires.zone_horaire">
                <h2>{{fiche_horaire.jours_horaire}}</h2>
                <div class="tranches_horaire" v-for="tranche_horaire in fiche_horaire.tranches_horaires">
                  <p>{{tranche_horaire.libelle_tanche_horaire}}</p>
                  <p>|</p>
                  <p>{{tranche_horaire.horaires}}</p>
                </div>
              </div>
            </div>





          </div>
        </div>

        <div class="zoneContact" v-for="zone_contact in listeZoneContact" :style="{'grid-row': zone_contact.place_sur_la_grille}">
          <div class="bloc_contact" v-for="bloc_contact in zone_contact.bloc_contact">
              <h2>Contact</h2>
              <p>{{bloc_contact.nom_de_la_personne}}</p>
              <a v-for="mail in bloc_contact.adresses_mail" :href="'mailto:'+mail.adresse_mail">{{mail.adresse_mail}}</a>

              <p>Téléphone :
                <a v-for="tel in bloc_contact.numeros_tel" :href="'tel:'+tel.numero_tel">{{tel.numero_tel}} | </a>
              </p>
          </div>
        </div>

        <div class="zoneRestauAsso" v-for="zone_restau in listeZoneComRest" :style="{'grid-row': zone_restau.place_sur_la_grille}">
          <div class="bloc_resto_asso" v-for="bloc_resto_asso in zone_restau.bloc_restaurant_commerce_asso">
            <h2>{{bloc_resto_asso.titre_liste}}</h2>
            <div class="liste_wrap">
              <div class="fiche_resto_asso" v-for="fiche_resto_asso in bloc_resto_asso.fiche_restaurant_commerce">
                <h3>{{fiche_resto_asso.nom_restaurant_commerce_asso}}</h3>
                <p v-if="fiche_resto_asso.adresse_restaurant_commerce_asso !== ''">
                  Adresse : {{fiche_resto_asso.adresse_restaurant_commerce_asso}}

                </p>
                <p v-if="fiche_resto_asso.n_tel_restaurant_commerce_asso !== ''">N° de téléphone : {{fiche_resto_asso.n_tel_restaurant_commerce_asso}}</p>

                <p v-for="lien_reseau in fiche_resto_asso.lien_reseaux_site_web" v-if="fiche_resto_asso.lien_reseaux_site_web !== []">{{lien_reseau.nom_du_reseaux}} : <a target="_blank" :href="lien_reseau.lien_reseaux_site_web">{{lien_reseau.titre_reseaux_site_web}}</a>
                </p>
                <h3 v-if="fiche_resto_asso.horaires_restaurant_commerce_asso !== false">Horaires</h3>
                <table>
                  <tr v-for="horaire in fiche_resto_asso.horaires_restaurant_commerce_asso">
                    <td><p>{{horaire.jours_}}</p></td>
                    <td class="heure"><p>{{horaire.heures_ouverture}}</p></td>
                  </tr>
                </table>
              </div>

            </div>


          </div>

        </div>
      </div>

    </div>

  </main>
</template>

<script>
import param from "@/param/param";
import textZone from "../components/textZone";

export default {
  name: "pageConstructor",
  components: {textZone},
  data () {
    return {
      page: {
        id:0,
        info_page:[],
        contenu_page: [],
      },
      listeBlocTxt: [],
      listeZoneTxt: [],
      listeZoneFichier: [],
      listeZoneImage: [],
      listeZoneLien: [],
      listeZoneHoraire: [],
      listeZoneComRest: [],
      listeZoneListe: [],
      listeZoneVerticale: [],
      listeZoneContact: [],
    }
  },

  created() {
    this.page.id = this.$route.params.id
    console.log('titre page', this.page.id)

    axios.get(param.host+"pages_enfance/"+this.page.id)
      .then(response => {
        this.page = response.data
        console.log('page', this.page)

        this.page.info_page = response.data.acf.info_page

        console.log('info page', this.page.info_page)

        this.page.contenu_page = response.data.acf.contenu_de_la_page.bloc

        // let infoPage = this.page.acf.info_page
        // console.log('info page', infoPage)


        for (let i = 0; i <this.page.contenu_page.length; i++) {
          let type_bloc = this.page.contenu_page[i].type_de_bloc
          // console.log('type bloc', type_bloc)

          if (type_bloc === 'Zone de texte') {
            this.listeZoneTxt.push(this.page.contenu_page[i])
          }
          if (type_bloc === "Zone d'horaires") {
            this.listeZoneHoraire.push(this.page.contenu_page[i])
          }
          if (type_bloc === 'Zone de pdf') {
            this.listeZoneFichier.push(this.page.contenu_page[i])
          }
          if (type_bloc === "Zone d'image") {
            this.listeZoneImage.push(this.page.contenu_page[i])
          }
          if (type_bloc === 'Zone de liens') {
            this.listeZoneLien.push(this.page.contenu_page[i])
          }
          if (type_bloc === 'Zone de commerce, restaurant, ...') {
            this.listeZoneComRest.push(this.page.contenu_page[i])
          }
          if (type_bloc === 'Zone de liste') {
            this.listeZoneListe.push(this.page.contenu_page[i])
          }
          if (type_bloc === 'Zone verticale (texte, img, texte)') {
            this.listeZoneVerticale.push(this.page.contenu_page[i])
          }
          if (type_bloc === 'Zone de contact') {
            this.listeZoneContact.push(this.page.contenu_page[i])
          }





        }

        for (let i = 0; i< this.listeZoneTxt.length; i++) {
          // this.listeZoneTxt.listeBlocTxt = response.data.acf.contenu_de_la_page.bloc[i].bloc_de_texte
         this.listeBlocTxt = this.listeZoneTxt[i].bloc_de_texte
        }
        console.log('listeBlocTxt', this.listeBlocTxt)

        console.log('listeZoneTxt', this.listeZoneTxt)
        console.log('listeZoneFichier', this.listeZoneFichier)
        console.log('listeZoneHoraire', this.listeZoneHoraire)
        console.log('listeContact', this.listeZoneContact)
        console.log('listeResto', this.listeZoneComRest)

      }).catch(error => console.log(error))

  }

}
</script>
