import Vue from 'vue'

import './styles/quasar.scss'
import 'quasar/dist/quasar.ie.polyfills'
import lang from 'quasar/lang/ru.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, Notify } from "quasar";

Vue.use(Quasar, {
  config: {
    notify: {},
  },
  plugins: {
    Notify,
  },
  lang: lang
 })