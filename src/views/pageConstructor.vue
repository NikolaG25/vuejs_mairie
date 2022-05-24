<template>
  <main>
    <h1>{{ this.page.info_page.nom_de_la_page }}</h1>

    <div class="content">
      <div class="bandeau">
        <iframe id="myiFrame" class="myiFrame" width="480" height="600" src="https://player.centaure-systems.fr/embedded/1039951bfa96267e491fd0113608350bec05aeb4"></iframe>
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
                  <a :href="fiche_pdf.fichier_zip_dossier.url" target="_blank">Voir le PDF</a>

                  <a :href="fiche_pdf.fichier_zip_dossier.url" download>Télécharger le PDF</a>
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
          <div class="bloc_resto_asso" v-for="bloc_resto_asso in zone_restau.bloc_restaurant_commerce">
            <h2>{{bloc_resto_asso.titre_liste}}</h2>
            <div class="liste_wrap">
              <div class="fiche_resto_asso" v-for="fiche_resto_asso in bloc_resto_asso.fiche_restaurant_commerce">
                <h3>{{fiche_resto_asso.nom_restaurant_commerce}}</h3>
                <p v-if="fiche_resto_asso.adresse_restaurant_commerce !== ''">
                  Adresse : {{fiche_resto_asso.adresse_restaurant_commerce}}

                </p>
                <p v-if="fiche_resto_asso.n_tel_restaurant_commerce !== ''">N° de téléphone : {{fiche_resto_asso.n_tel_restaurant_commerce}}</p>

                <p v-for="lien_reseau in fiche_resto_asso.lien_reseaux_site_web" v-if="fiche_resto_asso.lien_reseaux_site_web !== []">{{lien_reseau.nom_du_reseaux}} : <a target="_blank" :href="lien_reseau.lien_reseaux_site_web">{{lien_reseau.titre_reseaux_site_web}}</a>
                </p>
                <h3 v-if="fiche_resto_asso.horaires_restaurant_commerce !== false">Horaires</h3>
                <table>
                  <tr v-for="horaire in fiche_resto_asso.horaires_restaurant_commerce">
                    <td><p>{{horaire.jours}}</p></td>
                    <td class="heure"><p>{{horaire.heures_ouverture}}</p></td>
                  </tr>
                </table>
              </div>

            </div>


          </div>

        </div>

        <div class="zoneAsso" v-for="zone_asso in listeZoneAsso" :style="{'grid-row': zone_asso.place_sur_la_grille}">
          <div class="bloc_asso liste_wrap" v-for="bloc_asso in zone_asso.bloc_association">
            <div class="fiche_resto_asso" v-for="fiche_asso in bloc_asso.fiche_asso">
              <h3>{{fiche_asso.nom_asso}}</h3>
              <p>Président : {{fiche_asso.president_e}}</p>
              <p>Addresse : {{fiche_asso.adresse_asso}}</p>
              <p>Adresse mail : <a :href="'mailto:'+fiche_asso.adresse_mail_asspo">{{fiche_asso.adresse_mail_asspo}}</a></p>
              <p>Numéro de téléphone : {{fiche_asso.n_tel_asso}}</p>
            </div>
          </div>
        </div>

        <div class="zoneLien" v-for="zone_lien in listeZoneLien" :style="{'grid-row': zone_lien.place_sur_la_grille}">
          <div class="bloc_lien" v-for="bloc_lien in zone_lien.bloc_de_liens">
            <h2>{{bloc_lien.titre}}</h2>
            <div class="liste_wrap">
              <div class="fiche_lien" v-for="fiche_lien in bloc_lien.liste_fiche_liens">
                <h2>{{fiche_lien.titre_lien}}</h2>
                <a target="_blank" :href="fiche_lien.lien">Site web</a>
              </div>
            </div>

          </div>
        </div>

        <div class="zoneImg" v-for="zone_img in listeZoneImage" :style="{'grid-row': zone_img.place_sur_la_grille}">
          <div class="bloc_img" v-for="bloc_img in zone_img.bloc_image">
            <h2>{{bloc_img.titre}}</h2>
            <p v-for="para_avant_img in bloc_img.paragraphes_avant_liste_images">{{para_avant_img.paragraphe_avant_liste_image}}</p>

            <div class="liste_wrap">
              <div class="fiche_img" v-for="fiche_img in bloc_img.liste_images">
                <h2>{{fiche_img.titre_image}}</h2>
                <img :src="fiche_img.fichier_image.url" :alt="fiche_img.titre_image">
              </div>
            </div>

            <p v-for="para_apr_img in bloc_img.paragraphes_apres_liste_images">{{para_apr_img.paragraphe_apres_liste_image}}</p>

          </div>
        </div>

        <div class="zoneCal" v-for="zone_cal in listeZoneCal" :style="{'grid-row': zone_cal.place_sur_la_grille}">
          <div class="bloc_cal" v-for="bloc_cal in zone_cal.bloc_calendrier">
            <h2>{{bloc_cal.titre_calendrier}}</h2>
            <div class="liste_wrap calendar">
              <div class="event" v-for="event in bloc_cal.fiche_calendrier">
                <div class="date">
                  <p class="num_date">{{event.numero_jour}}</p>
                  <div>
                    <p class="day_date">{{event.jour}}</p>
                    <hr>
                    <p class="month_date">{{event.mois}}</p>
                  </div>
                </div>
                <div class="info_cal">
                  <h2>{{event.nom_evenement}}</h2>
                  <h2>Lieu : {{event.lieu}}- Horaires : {{event.horaires}}</h2>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div class="zoneImgTxt" v-for="zone_img_txt in listeZoneImgTxt" :style="{'grid-row': zone_img_txt.place_sur_la_grille}">
          <div class="bloc_img_txt" v-for="bloc_img_txt in zone_img_txt.bloc_image_texte">
            <h2>{{bloc_img_txt.titre_bloc}}</h2>
            <p v-for="para_avant in bloc_img_txt.paragraphes_avant_liste">{{para_avant.paragraphe_avant_liste}}</p>
            <div class="liste_wrap">
              <div class="fiche_img_txt" v-for="fiche_img_txt in bloc_img_txt.fiches_image_texte">
                <h2>{{fiche_img_txt.titre_fiche}}</h2>

                <img :src="fiche_img_txt.image_fiche.url" :alt="fiche_img_txt.titre_fiche">

                <p v-for="para_fiche in fiche_img_txt.paragraphes_fiche">
                  {{para_fiche.paragraphe_fiche}}
                </p>

              </div>

            </div>
            <p v-for="para_apr in bloc_img_txt.paragraphes_apres_liste">{{para_apr.paragraphe_apres_liste}}</p>


          </div>
        </div>

        <div class="zoneService" v-for="zone_service in listeZoneService" :style="{'grid-row': zone_service.place_sur_la_grille}">
          <div class="bloc_service" v-for="bloc_service in zone_service.bloc_services_municipaux">
            <h2>{{bloc_service.titre}}</h2>
            <div class="liste_wrap">
              <div class="service" v-for="fiche_service in bloc_service.fiches_service">
                <h2>{{fiche_service.nom_service}}</h2>

                <p v-if="fiche_service.adresse_service !== ''">Adresse : {{fiche_service.adresse_service}}</p>
                <p v-if="fiche_service.numero_tel !== ''">N° téléphone : {{fiche_service.numero_tel}}</p>
                <p v-for="para_service in fiche_service.paragraphes_service">{{para_service.paragraphe_service}}</p>
              </div>

            </div>

          </div>
        </div>

        <div class="zoneTabl" v-for="zone_tableau in listeZoneTableau" :style="{'grid-row': zone_tableau.place_sur_la_grille}">
          <div class="bloc_tabl" v-for="bloc_tableau in zone_tableau.bloc_tableau">
            <table class="tableau" v-for="tableau in bloc_tableau.tableau">
              <tr v-for="lignes in tableau.lignes">
                <td v-for="col in lignes.ligne">
                  <p v-for="para_tabl in col.colonne">{{para_tabl.contenu_case}}</p>
                </td>
              </tr>
            </table>
          </div>
        </div>

      </div>

    </div>

  </main>
</template>

<script>
import param from "@/param/param";

export default {
  name: "pageConstructor",
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
      listeZoneAsso: [],
      listeZoneCal: [],
      listeZoneImgTxt: [],
      listeZoneService: [],
      listeZoneTableau: []
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
          if (type_bloc === 'Zone association') {
            this.listeZoneAsso.push(this.page.contenu_page[i])
          }
          if (type_bloc === 'Zone de calendrier') {
            this.listeZoneCal.push(this.page.contenu_page[i])
          }
          if (type_bloc === 'Zone image et texte') {
            this.listeZoneImgTxt.push(this.page.contenu_page[i])
          }
          if (type_bloc === 'Zone service') {
            this.listeZoneService.push(this.page.contenu_page[i])
          }
          if (type_bloc === 'Zone tableau') {
            this.listeZoneTableau.push(this.page.contenu_page[i])
          }






        }

        for (let i = 0; i< this.listeZoneTxt.length; i++) {
          // this.listeZoneTxt.listeBlocTxt = response.data.acf.contenu_de_la_page.bloc[i].bloc_de_texte
         this.listeBlocTxt = this.listeZoneTxt[i].bloc_de_texte
        }
        // console.log('listeBlocTxt', this.listeBlocTxt)

/*        console.log('listeZoneTxt', this.listeZoneTxt)
        console.log('listeZoneFichier', this.listeZoneFichier)
        console.log('listeZoneHoraire', this.listeZoneHoraire)
        console.log('listeContact', this.listeZoneContact)
        console.log('listeResto', this.listeZoneComRest)
        console.log('listeAsso', this.listeZoneAsso)
        console.log('listeLien', this.listeZoneLien)
        console.log('listeImg', this.listeZoneImage)
        console.log('listeCal', this.listeZoneCal)*/
        console.log('listeImgTxt', this.listeZoneImgTxt)
        console.log('listeService', this.listeZoneService)
        console.log('listeTableau', this.listeZoneTableau)


      }).catch(error => console.log(error))

  }

}
</script>
