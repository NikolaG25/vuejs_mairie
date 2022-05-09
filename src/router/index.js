import Vue                  from 'vue'
import Router               from 'vue-router'

//import pages principales
import Accueil              from "../views/Accueil";
import Village              from "../views/Village";
import Mairie               from "../views/Mairie";
import Demarches            from "../views/Demarches";
import Enfance              from "../views/Enfance";
import Vie_loc              from "../views/Vie_loc";
import Soli_sen             from "../views/Soli_sen";
import Contact              from "../views/Contact";

//import pages démarches
import demarchesAdmin       from "../views/viewsDemarches/demarchesAdmin";
import locSalle             from "../views/viewsDemarches/locSalle";
import Urbanisme            from "../views/viewsDemarches/Urbanisme";
import dechets              from "../views/viewsDemarches/dechets";
import Cimetiere            from "../views/viewsDemarches/Cimetiere";
import Affouage             from "../views/viewsDemarches/Affouage";

//import pages mairie
import Elus                 from "../views/viewsMairie/Elus";
import seancesConseil       from "../views/viewsMairie/seancesConseil";
import servicesMunicipaux   from "../views/viewsMairie/servicesMunicipaux";
import commissions          from "../views/viewsMairie/commissions";


//import pages Vie Locale
import Associations         from "../views/viewsVieLoc/Associations";
import calManif             from "../views/viewsVieLoc/calManif";
import Commerces            from "../views/viewsVieLoc/Commerces";
import paroisseBiblio       from "../views/viewsVieLoc/paroisseBiblio";
import proSante             from "../views/viewsVieLoc/proSante";
import restaurantsBars      from "../views/viewsVieLoc/restaurantsBars";
import Transports           from "../views/viewsVieLoc/Transports";


//import pages village
import geoDemo              from "../views/viewsVillage/geoDemo";
import Histoire             from "../views/viewsVillage/Histoire";
import mathayInfoDialogue   from "../views/viewsVillage/mathayInfoDialogue";
import queVoirFaire         from "../views/viewsVillage/queVoirFaire";

//import pages enfance
import Ecoles               from "../views/viewsEnfance/Ecoles";
import periscoRestMer       from "../views/viewsEnfance/periscoRestMer";

Vue.use(Router)

export default new Router({
  routes: [

    //routes pages principales
    {path: '/',                                 name: 'Accueil',                component: Accueil},
    {path: '/Village',                          name: 'Village',                component: Village},
    {path: '/Mairie',                           name: 'Mairie',                 component: Mairie},
    {path: '/Demarches',                        name: 'Demarches',              component: Demarches},
    {path: '/Enfance',                          name: 'Enfance',                component: Enfance},
    {path: '/VieLocale',                        name: 'VieLocale',              component: Vie_loc},
    {path: '/SoliSen',                          name: 'SoliSen',                component: Soli_sen},
    {path: '/Contact',                          name: 'Contact',                component: Contact},

    //routes pages demarches
    {path: '/Demarches/demarchesAdmin',         name: 'demarchesAdmin',         component: demarchesAdmin},
    {path: '/Demarches/locSalle',               name: 'locSalle',               component: locSalle},
    {path: '/Demarches/Urbanisme',              name: 'Urbanisme',              component: Urbanisme},
    {path: '/Demarches/Dechets',                name: 'Dechets',                component: dechets},
    {path: '/Demarches/Cimetiere',              name: 'Cimetiere',              component: Cimetiere},
    {path: '/Demarches/Affouage',               name: 'Affouage',               component: Affouage},

    //routes pages mairie
    {path: '/Mairie/Elus',                      name: 'Elus',                   component: Elus},
    {path: '/Mairie/seancesConseil',            name: 'seancesConseil',         component: seancesConseil},
    {path: '/Mairie/servicesMunicipaux',        name: 'servicesMunicipaux',     component: servicesMunicipaux},
    {path: '/Mairie/commissions',               name: 'commissions',            component: commissions},


    //routes pages Vie Locale
    {path: '/VieLocale/Associations',           name: 'Associations',           component: Associations},
    {path: '/VieLocale/calManif',               name: 'calManif',               component: calManif},
    {path: '/VieLocale/Commerces',              name: 'Commerces',              component: Commerces},
    {path: '/VieLocale/paroisseBiblio',         name: 'paroisseBiblio',         component: paroisseBiblio},
    {path: '/VieLocale/proSante',               name: 'proSante',               component: proSante},
    {path: '/VieLocale/restaurantsBars',        name: 'restaurantsBars',        component: restaurantsBars},
    {path: '/VieLocale/Transports',             name: 'Transports',             component: Transports},

    //routes pages village
    {path: '/Village/geoDemo',                  name: 'geoDemo',                component: geoDemo},
    {path: '/Village/Histoire',                 name: 'Histoire',               component: Histoire},
    {path: '/Village/mathayInfoDialogue',       name: 'mathayInfoDialogue',     component: mathayInfoDialogue},
    {path: '/Village/queVoirFaire',             name: 'queVoirFaire',           component: queVoirFaire},

    //routes pages enfance
    {path: '/Enfance/Ecoles',                   name: 'Ecoles',                 component: Ecoles},
    {path: '/Enfance/periscoRestMer',           name: 'periscoRestMer',         component: periscoRestMer},


  ]
})
