import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import { BootstrapVue } from 'bootstrap-vue';
import { ValidationProvider, extend,ValidationObserver } from 'vee-validate';
import {required} from "vee-validate/dist/rules";
import "./scss/main.scss";
import 'leaflet/dist/leaflet.css';
import Fragment from 'vue-fragment'
// import VueScrollmagic from 'vue-scrollmagic';
import VueScrollTo from 'vue-scrollto';
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import * as Facebook from 'fb-sdk-wrapper';
// import {initializeApp} from "firebase";

import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import interceptorsSetup from './utils/interceptors';

import vuescroll from 'vuescroll';

import VueSweetalert2 from 'vue-sweetalert2';


Vue.use(VueSweetalert2);
// Vue.use(BootstrapVue);

// Add a rule.
const telRegex = new RegExp("^(?:(?:\\+|0{0,2})91(\\s*[\\ -]\\s*)?|[0]?)?[789]\\d{9}|(\\d[ -]?){10}\\d$");
extend('usetel', {
    validate: value => telRegex.test(value),
    message: 'phone number should be a valid one.'
});

extend('required', {
    ...required,
    message: 'This field is required'
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.use(Fragment.Plugin);
// Vue.use(VueScrollmagic);
Vue.use(VueScrollTo);
/*import Vuebar from 'vuebar';
Vue.use(Vuebar);*/
// Vue.use(PerfectScrollbar);

Vue.use(vuescroll,{
    ops: {
        bar: {
            background: 'rgba(0,0,0,.5)',
            onlyShowBarOnScroll: true,
            showDelay: 500,
            keepShow: false,
            opacity: 1,
            hoverStyle: true
        },
        rail: {
            background: '#cecece',
            opacity: 0.5,
            size: '8px',
            specifyBorderRadius: false,
            gutterOfEnds: null,
            gutterOfSide: '2px',
            keepShow: false,
        }
    },
});


(()=>{
    gsap.registerPlugin(CSSPlugin)
})();
// gsap.registerPlugin(CSSPlugin)



Vue.config.productionTip = false;

Facebook.load()
    .then(() => {
      Facebook.init({
        appId: '219025142664942'
      });
    });

/*initializeApp({
    apiKey: "AIzaSyBNCu0hbW-VW_cb6qn5aqPeclyWX7bJ_ls",                             // Auth / General Use
    applicationId: "1:27992087142:web:ce....",      // General Use
    projectId: "playground-227414",               // General Use
    authDomain: "playground-227414.firebaseapp.com",         // Auth with popup/redirect
})*/


import GAuth from 'vue-google-oauth2'
const gauthOption = {
    clientId: '532410109369-2lhp0075ljpo34o3rc3lhjfafuih9vda.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

interceptorsSetup();

