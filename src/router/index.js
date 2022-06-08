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

import pageConstructor      from "../views/pageConstructor";

import mentionsLegales      from "../views/mentionsLegales";
import planSite             from "../views/planSite";

import calendar             from "../views/Calendar";

import Actu                 from "../views/Actu";

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

    {path: '/PlanDuSite',                       name: 'PlanDuSite',             component: planSite},
    {path: '/mentionsLegales',                  name: 'mentionsLegales',        component: mentionsLegales},

    {path: '/Calendrier',                       name: 'Calendrier',             component: calendar},

    {path: '/Actu',                             name: 'Actu',             component: Actu},

    {path: '/Enfance/:id', name:'pageConstructorEnfance', component: pageConstructor},
    {path: '/Village/:id', name:'pageConstructorVillage', component: pageConstructor},
    {path: '/VieLocale/:id', name:'pageConstructorVieLocale', component: pageConstructor},
    {path: '/Mairie/:id', name:'pageConstructorMairie', component: pageConstructor},
    {path: '/Demarches/:id', name:'pageConstructorDemarches', component: pageConstructor},
    {path: '/SoliSen/:id', name:'pageConstructorSoliSen', component: pageConstructor},


  ]
})
